import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobreAppPageRoutingModule } from './sobre-app-routing.module';

import { SobreAppPage } from './sobre-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobreAppPageRoutingModule
  ],
  declarations: []
})
export class SobreAppPageModule {}
