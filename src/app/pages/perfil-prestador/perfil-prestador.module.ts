import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPrestadorPageRoutingModule } from './perfil-prestador-routing.module';

import { PerfilPrestadorPage } from './perfil-prestador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPrestadorPageRoutingModule
  ],
  declarations: []
})
export class PerfilPrestadorPageModule {}
