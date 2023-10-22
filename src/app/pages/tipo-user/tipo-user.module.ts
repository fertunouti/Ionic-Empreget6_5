import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoUserPageRoutingModule } from './tipo-user-routing.module';

import { TipoUserPage } from './tipo-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoUserPageRoutingModule
  ],
  declarations: [TipoUserPage]
})
export class TipoUserPageModule {}
