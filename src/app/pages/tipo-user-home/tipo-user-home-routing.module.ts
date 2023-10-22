import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoUserHomePage } from './tipo-user-home.page';

const routes: Routes = [
  {
    path: '',
    component: TipoUserHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoUserHomePageRoutingModule {}
