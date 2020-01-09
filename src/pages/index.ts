import { RouteConfig } from 'react-router-config';

import { SignInPage } from './join';
import { HomePage } from './home';
import { ProfilePage } from './profile';
import { FoodPage } from './food';
import { UsersPage } from './users';
import { NotFoundPage } from './notFound';
import {
  ConstructorPage,
  View,
  SettingsPage,
  UsersPage as UsersConstrPage,
} from './constructor';

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
    path: '/users',
    exact: true,
    component: UsersPage,
  },
  {
    path: '/food/:id',
    exact: true,
    component: FoodPage,
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
        component: UsersConstrPage,
        exact: true,
      },
    ],
  },
  {
    component: NotFoundPage,
  },
];
