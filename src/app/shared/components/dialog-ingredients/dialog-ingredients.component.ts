import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-ingredients',
  standalone: false,
  templateUrl: './dialog-ingredients.component.html',
  styleUrl: './dialog-ingredients.component.css',
})
export class DialogIngredientsComponent {
  @Input()
  ingredients: { ingredient: string; measure: string }[] = [];

  @Input()
  visible: boolean = false;

  @Output()
  close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

  // Obtener las imagenes
  public getIngredientImage(name: string): string {
    const cleanName = name.trim().replace(/\s+/g, '%20');
    return `https://www.thecocktaildb.com/images/ingredients/${cleanName}-Small.png`;
  }
}
