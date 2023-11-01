import React, { useState } from 'react';
import {
  SContainer,
  SContainerIcons,
  SDivider,
  SIcons,
  SImg,
  SInput,
  SMain,
  SSubmit,
} from './addPost.styled';
import { useAppSelector } from '../../../../hooks/redux';
import { selectorUser } from '../../../../entities/user/user.selectors';
import { Camera, File, Music, Poster, Setting, Video } from '../../../../shared/assets/icons';
import BaseButton from '../../../ui/buttons/baseButton';

//TODO: Обернуть в формик

const AddPost = () => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');

  const user = useAppSelector(selectorUser);

  const handleBlur = () => {
    if (!value) setIsActive(false);
  };

  const handleSubmit = () => {
    console.log(value);
    setValue('');
    setIsActive(false);
  };

  return (
    <SContainer onFinish={handleSubmit} position={isActive}>
      <SMain position={isActive}>
        <SImg color={user.avatar}>{user.name[0]}</SImg>
        <SInput
          value={value}
          position={isActive}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlur}
          onFocus={() => setIsActive(true)}
          placeholder="Что у вас нового?"
        />
      </SMain>
      <SContainerIcons position={isActive}>
        <SIcons>
          {isActive && <Poster />}
          {isActive && <SDivider />}
          <Camera title={'Камера'} />
          <Video />
          <Music />
          <File />
        </SIcons>
        {isActive && (
          <SSubmit>
            <Setting />
            <BaseButton htmlType="submit" disabled={!value} height="40px">
              Отправить
            </BaseButton>
          </SSubmit>
        )}
      </SContainerIcons>
      {/*<BaseButton variant="secondary">Отправить</BaseButton>*/}
    </SContainer>
  );
};

export default AddPost;
