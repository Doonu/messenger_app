import React, { FC, PropsWithChildren } from 'react';
import { ConfigProvider } from 'antd';
import antdTheme from '../../shared/styles/theme/antdTheme';

const AntdConfigProvider: FC<PropsWithChildren> = ({ children }) => {
  //TODO: Доделать
  return <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>;
};

export default AntdConfigProvider;
