import React from 'react';
import { BlockContainer } from '../../../../../shared/styles/containers';
import {
  SContent,
  SCount,
  SHeader,
  SImgSubstitute,
  SInfo,
  SLocation,
  SName,
  SProfileContainer,
  SUserStatistic,
} from './mainAdvanced.styled';
import { useAppSelector } from '../../../../../hooks/redux';
import { selectorUser } from '../../../../../entities/user/user.selectors';

const MainAdvancedProfile = () => {
  const user = useAppSelector(selectorUser);
  // TODO: Вынести в другой компонент 33 строка(нужно ли это?)
  // TODO: Генерация фоточки и сохранение в базу
  //TODO: Лишние проверки (27) -> mainProfile

  return (
    <BlockContainer>
      <SHeader />
      <SProfileContainer>
        {user.avatar && user.name && user.avatar[0] === '#' && user.name[0] && (
          <SImgSubstitute color={user.avatar}>{user.name[0]}</SImgSubstitute>
        )}
        <SInfo>
          <SName>{user.name}</SName>
          <SLocation>Нижний Новгород</SLocation>
        </SInfo>
      </SProfileContainer>
      <SContent>
        <SUserStatistic>
          <SCount>11К</SCount>
          <>Followers</>
        </SUserStatistic>
        <SUserStatistic>
          <SCount>1.4К</SCount>
          <>Following</>
        </SUserStatistic>
      </SContent>
    </BlockContainer>
  );
};

export default MainAdvancedProfile;
