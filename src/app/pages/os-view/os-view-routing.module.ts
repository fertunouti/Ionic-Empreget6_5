import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OsViewPage } from './os-view.page';

const routes: Routes = [
  {
    path: '',
    component: OsViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OsViewPageRoutingModule {}
