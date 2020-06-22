import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupProfessionalPageRoutingModule } from './signup-professional-routing.module';

import { SignupProfessionalPage } from './signup-professional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupProfessionalPageRoutingModule
  ],
  declarations: [SignupProfessionalPage]
})
export class SignupProfessionalPageModule {}
