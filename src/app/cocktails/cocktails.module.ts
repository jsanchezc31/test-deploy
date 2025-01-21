import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCocktailPageComponent } from './pages/by-cocktail-page/by-cocktail-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from './cocktails-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CocktailTableComponent } from './components/cocktail-table/cocktail-table.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Dialog } from 'primeng/dialog';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ByFirstLetterPageComponent } from './pages/by-first-letter-page/by-first-letter-page.component';



@NgModule({
  declarations: [
    ByFirstLetterPageComponent,
    ByCocktailPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CocktailTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    Dialog,
    CarouselModule,
    TagModule
  ]
})
export class CountriesModule { }
