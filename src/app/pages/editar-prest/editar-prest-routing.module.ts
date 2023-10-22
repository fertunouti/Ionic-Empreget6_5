import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPrestPage } from './editar-prest.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPrestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPrestPageRoutingModule {}
