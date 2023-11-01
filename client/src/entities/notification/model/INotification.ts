import { ReactNode } from 'react';

export type Types = 'error' | 'warning' | 'info' | 'success' | undefined;
export type Levels = 'low' | 'medium' | 'height' | undefined;

export interface INotification {
  message: {
    title: ReactNode;
    type: Types;
    level?: Levels;
  };
}
