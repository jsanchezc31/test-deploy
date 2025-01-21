import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { CountriesModule } from './cocktails/cocktails.module';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    SharedModule,
    CountriesModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cocktail-app';
}
