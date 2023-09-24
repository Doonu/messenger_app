import { ComponentType, lazy } from 'react';

// @ts-ignore
const Home = lazy(() => import(`../../pages/home`));

export interface IRoute {
  path: string;
  component: ComponentType;
  type: string;
}

export enum RoutesNamesPrivate {
  HOME = '/',
}

export enum RoutesNamesPublic {
  LOGIN = '/login',
  REGISTER = '/register',
}

export const privateRoutes: IRoute[] = [
  { path: RoutesNamesPrivate.HOME, component: Home, type: 'Home' },
];

export const publicRoutes: IRoute[] = [
  // { path: RoutesNamesPublic.LOGIN, component: Login, type: "Login" },
  // { path: RoutesNamesPublic.REGISTER, component: Register, type: "Register" },
];
