import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import {
  Cocktail,
  CocktailResponse,
  Ingredient,
} from '../interfaces/cocktail.interface';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({ providedIn: 'root' })
export class CocktailsService {
  private apiUrl: string = 'https://www.thecocktaildb.com/api/json/v1/1';

  public cacheStore: CacheStore = {
    byCocktailName: { term: '', cocktail: [] },
    byFirstLleter: { term: '', cocktail: [] },
  };

  constructor(private http: HttpClient) {
    console.log('Cocktail service init');
  }

  private getCocktailsRequest(url: string): Observable<Cocktail[]> {
    return this.http.get<CocktailResponse>(url).pipe(
      map((response) => response.drinks || []), // Accede a 'drinks' en la respuesta
      catchError(() => of([])),
      delay(1000)
    );
  }

  searchCocktailById(code: string): Observable<Cocktail | null> {
    let url = `${this.apiUrl}/lookup.php?i=${code}`;
    console.log(url);
    return this.http.get<CocktailResponse>(url).pipe(
      map((response) => response.drinks || []),
      map((cocktails) => (cocktails.length > 0 ? cocktails[0] : null)),
      catchError((error) => {
        console.log(error);
        return of(null);
      }),
      delay(1000)
    );
  }

  searchIngredientByName(name: string): Observable<Ingredient | null> {
    const cleanName = name.trim();
    const url = `${this.apiUrl}/search.php?i=${encodeURIComponent(cleanName)}`;

    return this.http.get<{ ingredients: Ingredient[] }>(url).pipe(
      map((resp) => {
        if (resp.ingredients && resp.ingredients.length > 0) {
          return resp.ingredients[0];
        }
        return null;
      }),
      catchError(() => of(null))
    );
  }

  searchCocktailByName(term: string): Observable<Cocktail[]> {
    const url = `${this.apiUrl}/search.php?s=${term}`;
    console.log(url);
    return this.getCocktailsRequest(url).pipe(
      tap((cocktail) => (this.cacheStore.byCocktailName = { term, cocktail }))
    );
  }

  searchCocktailsByCategory(category: string): Observable<Cocktail[]> {
    const url = `${this.apiUrl}/filter.php?c=${encodeURIComponent(category)}`;
    console.log(`Buscando por category: ${url}`);
    return this.http.get<CocktailResponse>(url).pipe(
      map((response) => response.drinks || []),
      catchError(() => of([])),
      delay(1000)
    );
  }

  searchCocktailByFirstLetter(term: string): Observable<Cocktail[]> {
    const url = `${this.apiUrl}/search.php?f=${term}`;
    return this.getCocktailsRequest(url).pipe(
      tap((cocktail) => (this.cacheStore.byFirstLleter = { term, cocktail }))
    );
  }

  searchRandomCocktail(): Observable<Cocktail | null> {
    let url = `${this.apiUrl}/random.php`;
    console.log(url);
    return this.http.get<CocktailResponse>(url).pipe(
      map((response) => response.drinks || []),
      map((cocktails) => (cocktails.length > 0 ? cocktails[0] : null)),
      catchError((error) => {
        console.log(error);
        return of(null);
      }),
      delay(1000)
    );
  }
}
