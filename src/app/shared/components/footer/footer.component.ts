import { Component } from '@angular/core';

@Component({
  selector: 'shared-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  public currentYear: number = new Date().getFullYear();
}
