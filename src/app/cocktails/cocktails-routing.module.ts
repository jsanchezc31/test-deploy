import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ByCocktailPageComponent } from './pages/by-cocktail-page/by-cocktail-page.component';
import { CocktailPageComponent } from './pages/cocktail-page/cocktail-page.component';
import { ByFirstLetterPageComponent } from './pages/by-first-letter-page/by-first-letter-page.component';

const routes: Routes = [
  {
    path: 'by-first-letter',
    component: ByFirstLetterPageComponent,
  },
  {
    path: 'by-cocktail',
    component: ByCocktailPageComponent,
  },
  {
    path: 'by/:id',
    component: CocktailPageComponent,
  },
  {
    path: '**',
    redirectTo: 'by-first-letter',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CocktailsRoutingModule {}
