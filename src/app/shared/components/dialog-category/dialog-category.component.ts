import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cocktail } from '../../../cocktails/interfaces/cocktail.interface';

@Component({
  selector: 'app-dialog-category',
  standalone: false,
  templateUrl: './dialog-category.component.html',
  styleUrl: './dialog-category.component.css',
})
export class DialogCategoryComponent {
  @Input()
  category: string = '';

  @Input()
  cocktails: Cocktail[] = [];

  @Input()
  visible: boolean = false;

  @Output()
  close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
