import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalizarOsPage } from './finalizar-os.page';

const routes: Routes = [
  {
    path: '',
    component: FinalizarOsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalizarOsPageRoutingModule {}
