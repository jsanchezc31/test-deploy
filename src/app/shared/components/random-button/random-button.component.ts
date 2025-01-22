import { Component, Input, OnInit } from '@angular/core';
import { CocktailsService } from '../../../cocktails/services/cocktails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-random-button',
  standalone: false,
  templateUrl: './random-button.component.html',
  styleUrl: './random-button.component.css',
})
export class RandomButtonComponent {
  constructor(
    private cocktailsService: CocktailsService,
    private router: Router
  ) {}

  getRandomCocktail(): void {
    this.cocktailsService.searchRandomCocktail().subscribe(
      (cocktail) => {
        if (cocktail && cocktail.idDrink) {
          console.log(cocktail.idDrink);
          this.router.navigate([`/cocktails/by/${cocktail.idDrink}`]);
        } else {
          alert(
            'No se encontró un cóctel aleatorio. Por favor, intenta de nuevo.'
          );
        }
      },
      (error) => {
        // Manejar errores HTTP
        console.error('Error al obtener cóctel aleatorio:', error);
        alert(
          'Hubo un error al obtener un cóctel aleatorio. Por favor, intenta más tarde.'
        );
      }
    );
  }
}
