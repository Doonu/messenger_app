import React, { FC } from 'react';
import { Setting } from './settings.styled';
import { Dropdown } from 'antd';
import { settingItemsDropdown } from '../../lib/settingsOptions';

const Settings: FC = () => {
  //TODO: Добавить хук useDevice и изменять положение
  return (
    <Dropdown placement="bottom" trigger={['hover']} menu={{ items: settingItemsDropdown }}>
      <Setting />
    </Dropdown>
  );
};

export default Settings;
