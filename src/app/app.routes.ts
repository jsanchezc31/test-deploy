// app.routes.ts
import { Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent
  // },
  {
    path: 'cocktails',
    loadChildren: () => import('./cocktails/cocktails.module').then(m => m.CountriesModule)
  },
  {
    path: '**',
    redirectTo: 'cocktails'
  }
];

export { routes };
