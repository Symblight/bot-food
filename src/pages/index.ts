import { SignInPage } from './join';
import { HomePage } from './home';

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
];
