import { SignInPage } from './join';
import { HomePage } from './home';
import { ProfilePage } from './profile';
import { ConstructorPage } from './constructor';

export const routes = () => [
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
    exact: true,
    component: ConstructorPage,
  },
];
