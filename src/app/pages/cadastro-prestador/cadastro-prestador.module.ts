import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPrestadorPageRoutingModule } from './cadastro-prestador-routing.module';

import { CadastroPrestadorPage } from './cadastro-prestador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPrestadorPageRoutingModule
  ],
  declarations: []
})
export class CadastroPrestadorPageModule {}
