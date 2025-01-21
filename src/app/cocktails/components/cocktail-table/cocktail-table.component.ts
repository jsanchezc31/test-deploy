import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/cocktail.interface';

@Component({
  selector: 'cocktails-table',
  standalone: false,

  templateUrl: './cocktail-table.component.html',
  styleUrl: './cocktail-table.component.css'
})
export class CocktailTableComponent {

  @Input()
  public countries: Country[] = [];

  visible: boolean = false;
  responsiveOptions: any[] | undefined;

    showDialog() {
        this.visible = true;
    }

    ngOnInit() {
    this.responsiveOptions = [
      {
          breakpoint: '1400px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '575px',
          numVisible: 1,
          numScroll: 1
      }
  ]
}

getSeverity(status: string) {
  switch (status) {
      case 'INSTOCK':
          return 'success';
      case 'LOWSTOCK':
          return 'warn';
      case 'OUTOFSTOCK':
          return 'danger';
      default:
          return 'success';

  }
}
}
