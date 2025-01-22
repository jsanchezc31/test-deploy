import { Component, Input, ViewChild } from '@angular/core';
import { Cocktail } from '../../interfaces/cocktail.interface';
import { Table } from 'primeng/table';
import { CocktailsService } from '../../services/cocktails.service';

@Component({
  selector: 'cocktails-table',
  standalone: false,

  templateUrl: './cocktail-table.component.html',
  styleUrl: './cocktail-table.component.css',
})
export class CocktailTableComponent {
  @ViewChild('dt') dt!: Table;

  @Input()
  public cocktails: Cocktail[] = [];
  public isLoading: boolean = false;

  constructor(private cocktailsService: CocktailsService) {}

  // Ingredientes modal
  public selectedIngredients: string[] = []; // Ingredientes seleccionados
  public modalVisible: boolean = false; // Controla la visibilidad del modal

  // Category modal
  public selectedCategoryCocktails: Cocktail[] = [];
  public categoryModalVisible: boolean = false;
  public selectedCategory: string = '';

  public selectedIngredientsWithMeasures: {
    ingredient: string;
    measure: string;
  }[] = [];

  countIngredients(cocktail: Cocktail): number {
    return Object.keys(cocktail).filter(
      (key) =>
        key.startsWith('strIngredient') && cocktail[key as keyof Cocktail]
    ).length;
  }

  // Abre el modal y selecciona los ingredientes
  showIngredients(cocktail: Cocktail): void {
    this.selectedIngredientsWithMeasures =
      this.extractIngredientsAndMeasures(cocktail);
    this.modalVisible = true; // Mostrar el modal
  }

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
          measure: measure ? (measure as string) : '',
        });
      }
    }

    return ingredientsWithMeasures;
  }

  // Busca los cócteles por categoría
  showCocktailsByCategory(category: string): void {
    this.isLoading = true;
    this.selectedCategory = category;
    this.cocktailsService
      .searchCocktailsByCategory(category)
      .subscribe((cocktailsByCat) => {
        this.isLoading = false;
        this.selectedCategoryCocktails = cocktailsByCat;
        this.categoryModalVisible = true;
      });
  }

  // Cierra el modal de ingredientes
  closeModal(): void {
    this.modalVisible = false;
  }

  // cierra modal de caterogia
  closeCategoryModal(): void {
    this.categoryModalVisible = false;
  }

  onGlobalFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    this.dt.filterGlobal(input.value, 'contains');
  }

  get alcoholicCount(): number {
    return this.cocktails.filter((c) => c.strAlcoholic === 'Alcoholic').length;
  }

  get nonAlcoholicCount(): number {
    return this.cocktails.filter((c) => c.strAlcoholic !== 'Alcoholic').length;
  }
}
