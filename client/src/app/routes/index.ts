import { ComponentType, lazy } from 'react';

// TODO: разобраться с этим
// @ts-ignore
const Home = lazy(() => import(`../../pages/private/home`));
// @ts-ignore
const Dialog = lazy(() => import('../../pages/private/dialog'));
// @ts-ignore
const Profile = lazy(() => import('../../pages/private/profile'));
// @ts-ignore
const Favorite = lazy(() => import('../../pages/private/favorite'));
// @ts-ignore
const Login = lazy(() => import('../../pages/public/login'));
// @ts-ignore
const Registration = lazy(() => import('../../pages/public/registration'));

export interface IRoute {
  path: string;
  component: ComponentType;
  type: string;
  description?: string;
}

export enum RoutesNamesPrivate {
  HOME = '/',
  DIALOG = '/dialog',
  NEWS = '/feed',
  FAVORITE = '/favorite',
}

export enum RoutesNamesPublic {
  LOGIN = '/',
  REGISTER = '/registration',
}

export const privateRoutes: IRoute[] = [
  { path: RoutesNamesPrivate.HOME, component: Home, type: 'Home' },
  { path: RoutesNamesPrivate.DIALOG, component: Dialog, type: 'Dialog' },
  { path: RoutesNamesPrivate.FAVORITE, component: Favorite, type: 'Favorite' },
  { path: RoutesNamesPrivate.NEWS, component: Profile, type: 'Profile' },
];

export const publicRoutes: IRoute[] = [
  { path: RoutesNamesPublic.LOGIN, component: Login, type: 'Login' },
  { path: RoutesNamesPublic.REGISTER, component: Registration, type: 'Register' },
];
