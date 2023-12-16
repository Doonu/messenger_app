export interface ITheme {
  type: string;
  colors: {
    active: string;
    secondary: string;
    success: string;
    danger: string;
    bg: string;
    text: string;
    secondaryBg: string;
    white: string;
    blue: string;
    link: string;
    secondaryText: string;
  };
  transition: {
    base: string;
    long: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    oldDesktop: string;
    desktop: string;
    bigDesktop: string;
  };
  radius: {
    base: string;
  };
}

export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}
