import React from 'react';
import { SContainer, SProfile, SInput } from './content.styled';
import { useFormikContext } from 'formik';
import { IPost } from '../../model/IPost';
import { useAppSelector } from '../../../../../hooks/redux';
import { selectorUser } from '../../../../../entities/user/user.selectors';

const Content = () => {
  const { values, setFieldValue } = useFormikContext<IPost>();
  const { name, avatar } = useAppSelector(selectorUser);

  return (
    <SContainer $position={values.isActive}>
      <SProfile color={avatar}>{name[0]}</SProfile>
      <SInput
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
