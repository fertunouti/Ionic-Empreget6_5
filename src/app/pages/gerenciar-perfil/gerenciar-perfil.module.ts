import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerenciarPerfilPageRoutingModule } from './gerenciar-perfil-routing.module';

import { GerenciarPerfilPage } from './gerenciar-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerenciarPerfilPageRoutingModule
  ],
  declarations: [GerenciarPerfilPage]
})
export class GerenciarPerfilPageModule {}
