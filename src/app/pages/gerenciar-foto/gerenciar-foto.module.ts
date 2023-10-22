import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerenciarFotoPageRoutingModule } from './gerenciar-foto-routing.module';

import { GerenciarFotoPage } from './gerenciar-foto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerenciarFotoPageRoutingModule
  ],
  declarations: []
})
export class GerenciarFotoPageModule {}
