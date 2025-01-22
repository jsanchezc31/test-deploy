import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCocktailPageComponent } from './pages/by-cocktail-page/by-cocktail-page.component';
import { CocktailPageComponent } from './pages/cocktail-page/cocktail-page.component';
import { CocktailsRoutingModule } from './cocktails-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CocktailTableComponent } from './components/cocktail-table/cocktail-table.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Dialog } from 'primeng/dialog';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ByFirstLetterPageComponent } from './pages/by-first-letter-page/by-first-letter-page.component';
import { DialogIngredientsComponent } from '../shared/components/dialog-ingredients/dialog-ingredients.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ByFirstLetterPageComponent,
    ByCocktailPageComponent,
    CocktailPageComponent,
    CocktailTableComponent,
  ],
  imports: [
    CommonModule,
    CocktailsRoutingModule,
    SharedModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    Dialog,
    CarouselModule,
    TagModule,
    IconFieldModule,
    InputIconModule,
    MultiSelectModule,
    SelectModule,
    RouterModule,
  ],
  exports: [CocktailsRoutingModule],
})
export class CocktailsModule {}
