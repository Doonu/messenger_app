import React from 'react';
import { SContainer } from './content.styled';
import { useFormikContext } from 'formik';
import { IPost } from '../../model/IPost';
import { useAppSelector } from '../../../../../hooks/redux';
import { selectorUser } from '../../../../../entities/user/user.selectors';
import PhotoProfile from '../../../../ui/profiles/photo';
import AutosizeInput from '../../../../ui/inputs/autosizeInput';

const Content = () => {
  const { values, setFieldValue } = useFormikContext<IPost>();
  const { name, avatar } = useAppSelector(selectorUser);

  return (
    <SContainer $position={values.isActive}>
      <PhotoProfile img={avatar}>{name[0]}</PhotoProfile>
      <AutosizeInput
        isDrag={true}
        minRows={2}
        value={values.content}
        $position={values.isActive}
        onChange={(e) => setFieldValue('content', e.target.value)}
        onFocus={() => setFieldValue('isActive', true)}
        placeholder="Что у вас нового?"
        autoComplete="off"
        draggable="false"
      />
    </SContainer>
  );
};

export default Content;
