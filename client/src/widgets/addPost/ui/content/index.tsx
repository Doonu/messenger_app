import React from 'react';
import { SContainer } from './content.styled';
import { useFormikContext } from 'formik';
import { IPost } from '../../model/IPost';
import { useAppSelector } from '../../../../hooks/redux';
import { selectorProfile } from '../../../../entities';
import PhotoProfile from '../../../../components/custom/profiles/photo';
import AutosizeInput from '../../../../components/ui/inputs/autosizeInput';

const Content = () => {
  const { values, setFieldValue } = useFormikContext<IPost>();
  const { name, avatar } = useAppSelector(selectorProfile);

  return (
    <SContainer $position={values.isActive}>
      <PhotoProfile img={avatar} name={name} />
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
