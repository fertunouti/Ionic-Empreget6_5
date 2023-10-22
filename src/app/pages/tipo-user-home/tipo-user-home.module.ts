import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoUserHomePageRoutingModule } from './tipo-user-home-routing.module';

import { TipoUserHomePage } from './tipo-user-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoUserHomePageRoutingModule
  ],
  declarations: [TipoUserHomePage]
})
export class TipoUserHomePageModule {}
