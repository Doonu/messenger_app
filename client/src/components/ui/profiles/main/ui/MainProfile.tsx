import React, { FC, useState } from 'react';
import { SArrowDown, SContainer, SDropdown, SImgSubstitute, SName } from './mainProfile.styled';
import { IMain } from '../model/IMain';
import { convertName } from '../../../../../shared/util/user';
import { itemsDropdown } from '../lib/items';

const MainProfile: FC<IMain> = ({ name, avatar }) => {
  //TODO: В сплывающем окне, смена темы и выход из аккаунта
  //TODO: Подумать над этим компонентом(Как должен выглядеть)
  //TODO: Сделать конфиг в локалсторадж для хранения темы, первый ли это заход пользователя в приложение

  const [arrow, setArrow] = useState(false);

  const rotateArrow = (isActive: boolean) => {
    setArrow(isActive);
  };

  return (
    <SDropdown onOpenChange={rotateArrow} menu={{ items: itemsDropdown }} trigger={['click']}>
      <SContainer>
        {avatar && avatar[0] === '#' && name && (
          <SImgSubstitute color={avatar}>{name[0]}</SImgSubstitute>
        )}
        <SName>{convertName(name)}</SName>
        <SArrowDown $isActive={arrow} />
      </SContainer>
    </SDropdown>
  );
};

export default MainProfile;
