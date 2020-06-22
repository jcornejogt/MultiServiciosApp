import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupProfessionalPage } from './signup-professional.page';

const routes: Routes = [
  {
    path: '',
    component: SignupProfessionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupProfessionalPageRoutingModule {}
