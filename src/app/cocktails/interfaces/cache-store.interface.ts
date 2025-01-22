import { Cocktail } from "./cocktail.interface";

export interface CacheStore {
  byCocktailName: TermCocktails;
  byFirstLleter: TermCocktails;
}

export interface TermCocktails {
  term: string;
  cocktail: Cocktail[];
}
