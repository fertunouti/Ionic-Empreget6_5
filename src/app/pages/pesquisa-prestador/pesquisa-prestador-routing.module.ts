import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisaPrestadorPage } from './pesquisa-prestador.page';

const routes: Routes = [
  {
    path: '',
    component: PesquisaPrestadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesquisaPrestadorPageRoutingModule {}
