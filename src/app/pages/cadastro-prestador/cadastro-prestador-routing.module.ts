import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroPrestadorPage } from './cadastro-prestador.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroPrestadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroPrestadorPageRoutingModule {}
