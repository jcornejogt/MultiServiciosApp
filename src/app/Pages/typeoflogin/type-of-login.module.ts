import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeOfLoginPageRoutingModule } from './type-of-login-routing.module';

import { TypeOfLoginPage } from './type-of-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeOfLoginPageRoutingModule
  ],
  declarations: [TypeOfLoginPage]
})
export class TypeOfLoginPageModule {}
