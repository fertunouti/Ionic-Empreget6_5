import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricoAgendamentosPage } from './historico-agendamentos.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoAgendamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoAgendamentosPageRoutingModule {}
