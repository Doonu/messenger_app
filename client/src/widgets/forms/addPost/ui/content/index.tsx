import React from 'react';
import { useFormikContext } from 'formik';
import { useAppSelector } from '@shared/hooks';
import { selectorProfile } from '@entities/profile';
import { PhotoProfile, AutosizeInput } from '@shared/components';

import { IPost } from '../../model/IPost';
import { SContainer } from './content.styled';

const Content = () => {
  const { values, setFieldValue } = useFormikContext<IPost>();
  const { name, avatar } = useAppSelector(selectorProfile);

  return (
    <SContainer $position={values.isActive}>
      <PhotoProfile img={avatar} name={name} />
      <AutosizeInput
        isDrag
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
