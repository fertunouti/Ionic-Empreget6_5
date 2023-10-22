import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobreAppPage } from './sobre-app.page';

const routes: Routes = [
  {
    path: '',
    component: SobreAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobreAppPageRoutingModule {}
