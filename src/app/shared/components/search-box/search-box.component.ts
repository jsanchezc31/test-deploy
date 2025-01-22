import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,

  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent{

  @Input()
  public initialValue: string = '';

  @Input()
  public allowOnlyOneCharacter: boolean = false; // Nueva propiedad

  @Input()
  public placeholder!: string;

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value: string): void {
    // Si se permite solo un carácter, recorta el valor a 1 carácter
    if (this.allowOnlyOneCharacter) {
      value = value.slice(0, 1);
    }
    this.onValue.emit(value);
  }
}
