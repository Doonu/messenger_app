import { ITheme, ThemeEnum } from './ITheme';

// TODO: Сделать изменение темы

export const baseTheme: ITheme = {
  colors: {
    danger: '#b32d2e',
    white: '#ffffff',
    success: '#248046',
    blue: '#5865f2',
    link: '#049fed',
    active: '',
    secondary: '',
    bg: '',
    text: '',
    secondaryBg: '',
    secondaryText: '',
  },
  breakpoints: {
    mobile: '450px',
    tablet: '600px',
    oldDesktop: '900px',
    desktop: '1200px',
    bigDesktop: '1439px',
  },
  transition: {
    base: '0.5s',
    long: '1s',
  },
  radius: {
    base: '10px',
  },
  type: 'dark',
};

// TODO: настроить светлую тему
export const lightTheme: ITheme = {
  ...baseTheme,
  type: ThemeEnum.light,
  colors: {
    ...baseTheme.colors,
    bg: '#76CCFB',
    active: '#0F1E36',
    secondary: '#000000',
    secondaryText: 'red',
  },
};

export const darkTheme: ITheme = {
  ...baseTheme,
  type: ThemeEnum.dark,
  colors: {
    ...baseTheme.colors,
    bg: '#2b2d31',
    secondaryBg: '#313338',
    text: '#949ba4',
    secondaryText: '#4c4d52',
    active: '#ffffff',
    secondary: '#1e1f22',
  },
};
