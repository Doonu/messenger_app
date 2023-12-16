import React from 'react';
import { ConfigProvider } from 'antd';

const AntdConfigProvider = () => {
  //TODO: Доделать
  return (
    <ConfigProvider
      theme={{
        components: {
          Dropdown: {},
        },
      }}
    ></ConfigProvider>
  );
};

export default AntdConfigProvider;
