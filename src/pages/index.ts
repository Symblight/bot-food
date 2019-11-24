import { RouteConfig } from 'react-router-config';

import { SignInPage } from './join';
import { HomePage } from './home';
import { ProfilePage } from './profile';
import { ConstructorPage, View, SettingsPage, UsersPage } from './constructor';

export const routes = (): RouteConfig[] => [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/login',
    exact: true,
    component: SignInPage,
  },
  {
    path: '/profile',
    exact: true,
    component: ProfilePage,
  },
  {
    path: '/bot/:id',
    component: View,
    routes: [
      {
        path: '/bot/:id',
        component: ConstructorPage,
        exact: true,
      },
      {
        path: '/bot/:id/settings',
        component: SettingsPage,
        exact: true,
      },
      {
        path: '/bot/:id/users',
        component: UsersPage,
        exact: true,
      },
    ],
  },
];
