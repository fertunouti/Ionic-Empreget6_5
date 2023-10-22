import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendamentosPrestadorPage } from './agendamentos-prestador.page';

const routes: Routes = [
  {
    path: '',
    component: AgendamentosPrestadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendamentosPrestadorPageRoutingModule {}
