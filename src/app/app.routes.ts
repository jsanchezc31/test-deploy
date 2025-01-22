// app.routes.ts
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cocktails',
    loadChildren: () =>
      import('./cocktails/cocktails.module').then((m) => m.CocktailsModule),
  },
  {
    path: '**',
    redirectTo: 'cocktails/by-first-letter',
  },
];

export { routes };
