import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ByCocktailPageComponent } from './pages/by-cocktail-page/by-cocktail-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { ByFirstLetterPageComponent } from './pages/by-first-letter-page/by-first-letter-page.component';

const routes: Routes = [
  {
    path: 'by-first-letter',
    component: ByFirstLetterPageComponent
  },
  {
    path: 'by-cocktail',
    component: ByCocktailPageComponent
  },
  {
    path: 'by-region',
    component: ByRegionPageComponent
  },
  {
    path: 'by/:id',
    component: CountryPageComponent
  },
  {
    path: '**',
    redirectTo: 'by-capital'
  }
];



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class CountriesRoutingModule { }
