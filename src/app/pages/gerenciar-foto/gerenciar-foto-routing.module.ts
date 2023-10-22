import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerenciarFotoPage } from './gerenciar-foto.page';

const routes: Routes = [
  {
    path: '',
    component: GerenciarFotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerenciarFotoPageRoutingModule {}
