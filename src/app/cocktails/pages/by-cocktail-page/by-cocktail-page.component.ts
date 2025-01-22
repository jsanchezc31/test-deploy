import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../../services/cocktails.service';
import { Cocktail } from '../../interfaces/cocktail.interface';

@Component({
  selector: 'app-by-cocktail-page',
  standalone: false,
  templateUrl: './by-cocktail-page.component.html',
  styleUrl: './by-cocktail-page.component.css',
})
export class ByCocktailPageComponent implements OnInit {
  public cocktails: Cocktail[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private cocktailsService: CocktailsService) {}

  ngOnInit(): void {
    this.cocktails = this.cocktailsService.cacheStore.byCocktailName.cocktail;
    this.initialValue = this.cocktailsService.cacheStore.byCocktailName.term;
  }

  searchCocktailByName(term: string): void {
    this.isLoading = true;

    this.cocktailsService.searchCocktailByName(term).subscribe((cocktails) => {
      console.log(cocktails);
      this.cocktails = cocktails;
      this.isLoading = false;
    });
  }
}
