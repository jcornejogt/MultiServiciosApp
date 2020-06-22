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
        loadChildren: () => import('../Pages/messages/messages.module').then(m => m.MessagesPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../Pages/settings/settings.module').then(m => m.SettingsPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
