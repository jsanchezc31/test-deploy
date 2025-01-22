import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

import { InputTextModule } from 'primeng/inputtext';
import { Dialog } from 'primeng/dialog';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { DialogIngredientsComponent } from './components/dialog-ingredients/dialog-ingredients.component';
import { ButtonModule } from 'primeng/button';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DialogCategoryComponent } from './components/dialog-category/dialog-category.component';
import { TableModule } from 'primeng/table';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RandomButtonComponent } from './components/random-button/random-button.component';
import { CocktailsModule } from '../cocktails/cocktails.module';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
    DialogIngredientsComponent,
    DialogCategoryComponent,
    CarouselComponent,
    FooterComponent,
    RandomButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    InputTextModule,
    Dialog,
    CarouselModule,
    TagModule,
    ButtonModule,
    TableModule,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
    DialogIngredientsComponent,
    DialogCategoryComponent,
    CarouselComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
