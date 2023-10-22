import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPrestadorPage } from './perfil-prestador.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPrestadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPrestadorPageRoutingModule {}
