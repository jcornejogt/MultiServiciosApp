import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeOfLoginPage } from './type-of-login.page';

const routes: Routes = [
  {
    path: '',
    component: TypeOfLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeOfLoginPageRoutingModule {}
