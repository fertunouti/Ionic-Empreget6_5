import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoUserPage } from './tipo-user.page';

const routes: Routes = [
  {
    path: '',
    component: TipoUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoUserPageRoutingModule {}
