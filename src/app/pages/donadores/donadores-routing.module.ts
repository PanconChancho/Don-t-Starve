import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonadoresPage } from './donadores.page';

const routes: Routes = [
  {
    path: '',
    component: DonadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonadoresPageRoutingModule {}
