import { IconBaseProps } from 'react-icons';

type ILogoTitle = 'left' | 'right';

export interface ILogo extends IconBaseProps {
  size?: number;
  $pulse?: boolean;
  $sizeBg?: string;
  $shadow?: boolean;
  title?: ILogoTitle;
}
