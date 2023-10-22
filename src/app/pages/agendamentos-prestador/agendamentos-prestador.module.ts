import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendamentosPrestadorPageRoutingModule } from './agendamentos-prestador-routing.module';

import { AgendamentosPrestadorPage } from './agendamentos-prestador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendamentosPrestadorPageRoutingModule
  ],
  declarations: []
})
export class AgendamentosPrestadorPageModule {}
