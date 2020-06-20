import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'feed',
        loadChildren: () => import('../Pages/feed/feed.module').then(m => m.FeedPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../Pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('../Pages/singup/singup.module').then(m => m.SingupPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../Pages/singup/singup.module').then(m => m.SingupPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
