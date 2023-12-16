import { ThemeConfig } from 'antd/es/config-provider/context';
import { baseTheme } from './theme';

const antdTheme: ThemeConfig = {
  token: {
    fontFamily: `Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    // colorPrimary: baseTheme.colors.text,
    // colorBgLayout: baseTheme.colors.bg,
  },
  components: {
    Input: {
      size: 1120,
    },
    Button: {},
    Select: {
      controlHeight: 40,
      borderRadius: 12,
      colorBorder: 'transparent',
    },
  },
};
export default antdTheme;
