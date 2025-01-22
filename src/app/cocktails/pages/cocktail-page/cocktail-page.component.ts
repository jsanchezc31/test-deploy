import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailsService } from '../../services/cocktails.service';
import { switchMap, tap } from 'rxjs';
import { Cocktail } from '../../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-page',
  standalone: false,
  templateUrl: './cocktail-page.component.html',
  styleUrl: './cocktail-page.component.css',
})
export class CocktailPageComponent implements OnInit {
  public cocktail?: Cocktail;
  public ingredientsWithMeasures: { ingredient: string; measure: string }[] =
    []; // Ingredientes y medidas
  public relatedCocktails: Cocktail[] = [];

  // Idioma:
  public selectedLanguage: string = 'ES'; // Idioma por defecto
  public instructions: string = ''; // Instrucciones en el idioma seleccionado
  public languages = [
    { code: 'EN', flag: 'us', img: 'assets/flags/uk.png' },
    { code: 'ES', flag: 'es', img: 'assets/flags/es.png' },
    { code: 'DE', flag: 'de', img: 'assets/flags/de.png' },
    { code: 'FR', flag: 'fr', img: 'assets/flags/fr.png' },
    { code: 'IT', flag: 'it', img: 'assets/flags/it.png' },
  ]; // Lista de idiomas

  constructor(
    private activateRoute: ActivatedRoute,
    private cocktailsService: CocktailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.cocktailsService.searchCocktailById(id)),
        tap((cocktail) => {
          if (!cocktail) {
            this.router.navigateByUrl('');
            return;
          }

          this.cocktail = cocktail;
          this.instructions =
            cocktail.strInstructionsES || 'No hay instrucciones en español';
          this.ingredientsWithMeasures =
            this.extractIngredientsAndMeasures(cocktail);

          // cocktails relacionados por categoría
          if (cocktail.strCategory) {
            this.cocktailsService
              .searchCocktailsByCategory(cocktail.strCategory)
              .subscribe((related) => {
                // Excluir el cóctel actual de los relacionados
                this.relatedCocktails = related.filter(
                  (c) => c.idDrink !== cocktail.idDrink
                );
              });
          }
        })
      )
      .subscribe();
  }

  // Ingredientes y medidas
  private extractIngredientsAndMeasures(
    cocktail: Cocktail
  ): { ingredient: string; measure: string }[] {
    const ingredientsWithMeasures: { ingredient: string; measure: string }[] =
      [];

    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}` as keyof Cocktail];
      const measure = cocktail[`strMeasure${i}` as keyof Cocktail];

      if (ingredient) {
        ingredientsWithMeasures.push({
          ingredient: ingredient as string,
          measure: measure ? (measure as string) : '', // Si no hay medida, usar cadena vacía
        });
      }
    }

    return ingredientsWithMeasures;
  }

  // Actualización del idioma
  updateInstructions(): void {
    const languageMap: { [key: string]: keyof Cocktail } = {
      ES: 'strInstructionsES',
      EN: 'strInstructions',
      DE: 'strInstructionsDE',
      FR: 'strInstructionsFR',
      IT: 'strInstructionsIT',
    };

    const instructionKey = languageMap[this.selectedLanguage];
    this.instructions =
      this.cocktail && this.cocktail[instructionKey as keyof Cocktail]
        ? (this.cocktail[instructionKey as keyof Cocktail] as string)
        : 'No hay traducción para este lenguaje.';
  }

  // Método para cambiar el idioma
  changeLanguage(language: string): void {
    this.selectedLanguage = language;
    this.updateInstructions(); // Actualiza las instrucciones al cambiar el idioma
  }
}
