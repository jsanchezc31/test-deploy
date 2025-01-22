import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../../services/cocktails.service';
import { Cocktail } from '../../interfaces/cocktail.interface';

@Component({
  selector: 'app-by-first-letter-page',
  standalone: false,
  templateUrl: './by-first-letter-page.component.html',
  styleUrl: './by-first-letter-page.component.css',
})
export class ByFirstLetterPageComponent implements OnInit {
  public cocktails: Cocktail[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private cocktailsService: CocktailsService) {}

  ngOnInit(): void {
    this.cocktails = this.cocktailsService.cacheStore.byFirstLleter.cocktail;
    this.initialValue = this.cocktailsService.cacheStore.byFirstLleter.term;
  }

  searchByFirstLetter(term: string): void {
    this.isLoading = true;

    this.cocktailsService
      .searchCocktailByFirstLetter(term)
      .subscribe((cocktails) => {
        this.cocktails = cocktails;
        this.isLoading = false;
      });

    console.log('Desde firstLetter');
  }
}
