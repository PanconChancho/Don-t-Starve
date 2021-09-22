import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
  {
    path: 'accion',
    loadChildren: () => import('./accion/accion.module').then( m => m.AccionPageModule)
  },
  {
    path: 'red',
    loadChildren: () => import('./red/red.module').then( m => m.RedPageModule)
  },
  {
    path: 'care',
    loadChildren: () => import('./care/care.module').then( m => m.CarePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
