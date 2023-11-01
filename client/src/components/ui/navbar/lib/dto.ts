import { IRoute, RoutesNamesPrivate } from '../../../../app/routes';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { MdFavorite } from 'react-icons/md';
import { BsNewspaper } from 'react-icons/bs';

type NavbarProps = IRoute;

export const NavbarDto: NavbarProps[] = [
  {
    path: RoutesNamesPrivate.HOME,
    type: 'Home',
    component: AiFillHome,
  },
  {
    path: RoutesNamesPrivate.NEWS,
    type: 'Feed',
    component: BsNewspaper,
  },
  {
    path: RoutesNamesPrivate.DIALOG,
    type: 'Dialog',
    component: AiFillMessage,
  },
  {
    path: RoutesNamesPrivate.FAVORITE,
    type: 'Favorite',
    component: MdFavorite,
  },
];
