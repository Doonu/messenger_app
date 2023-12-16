import React, { FC } from 'react';
import { Setting } from './settings.styled';
import { Dropdown } from 'antd';
import { settingItemsDropdown } from '../../lib/settingsOptions';

const Settings: FC = () => {
  return (
    <Dropdown trigger={['hover']} menu={{ items: settingItemsDropdown }}>
      <Setting />
    </Dropdown>
  );
};

export default Settings;
