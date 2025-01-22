export interface CocktailResponse {
  drinks: Cocktail[]; // Aquí `drinks` es un array de objetos tipo `Cocktail`.
}

export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: any;
  strTags?: string;
  strVideo: any;
  strCategory: string;
  strIBA?: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES?: string;
  strInstructionsDE?: string;
  strInstructionsFR?: string;
  strInstructionsIT: string;
  'strInstructionsZH-HANS': any;
  'strInstructionsZH-HANT': any;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8: any;
  strIngredient9: any;
  strIngredient10: any;
  strIngredient11: any;
  strIngredient12: any;
  strIngredient13: any;
  strIngredient14: any;
  strIngredient15: any;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8: any;
  strMeasure9: any;
  strMeasure10: any;
  strMeasure11: any;
  strMeasure12: any;
  strMeasure13: any;
  strMeasure14: any;
  strMeasure15: any;
  strImageSource?: string;
  strImageAttribution?: string;
  strCreativeCommonsConfirmed: string;
  dateModified?: string;
}

export interface Ingredient {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
  strType: string;
  strAlcohol?: string;
  strABV?: string;
}
