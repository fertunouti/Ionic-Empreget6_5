import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalizarOsPageRoutingModule } from './finalizar-os-routing.module';

import { FinalizarOsPage } from './finalizar-os.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalizarOsPageRoutingModule
  ],
  declarations: [FinalizarOsPage]
})
export class FinalizarOsPageModule {}
