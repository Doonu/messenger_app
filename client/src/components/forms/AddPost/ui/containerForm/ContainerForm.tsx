import React, { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

import Settings from '../settings/Settings';
import BaseButton from '../../../../ui/buttons/baseButton';
import { useFormikContext } from 'formik';
import { useOutsideClick } from '../../../../../hooks/outside';
import { v4 } from 'uuid';
import { IAllFiles, IPhotos } from '../../model/IPost';
import { IPost } from '../../model/IPost';
import {
  SContainer,
  SContainerIcons,
  SDragField,
  SSubmit,
  DragInput,
} from './containerForm.styled';
import Files from '../files';
import Photos from '../photos';
import Content from '../content';
import Icons from '../icons';

interface IContainerFormProps {
  isDraggablePhoto: boolean;
  handlerChange: () => void;
  data: IAllFiles;
  setData: Dispatch<SetStateAction<IAllFiles>>;
}

//TODO: Под фотографиями выводить файлы если они загружены
//TODO: Разделить по компонентам

const ContainerForm: FC<IContainerFormProps> = ({
  isDraggablePhoto,
  handlerChange,
  data,
  setData,
}) => {
  const { values, setFieldValue } = useFormikContext<IPost>();

  const isCorrect = !values.content.length && !data.photos.length && !data.files.length;

  const ref = useOutsideClick(() => {
    if (isCorrect) setFieldValue('isActive', false);
  });

  const handlerPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    handlerChange();
    const files = e.target.files;
    if (!files) return;

    //TODO: Сделать фильтрацию для файлов и фотографий

    if (data.photos.length + files.length > 5) {
      setFieldValue('isWarningModalTitle', 'Вы можете прикрепить к посту не больше 5 фотографий');
      handleOpenModal();
      return;
    }

    Array.from(files).forEach((fileItem, i) => {
      let reader = new FileReader();

      if (fileItem.type.indexOf('image') === 0) {
        reader.onloadend = () => {
          const result = reader.result;

          const item: IPhotos = {
            photo: fileItem,
            url: result,
            id: v4(),
          };

          setData((prev) => {
            return { ...prev, photos: [item, ...prev.photos] };
          });
        };
      }
      reader.readAsDataURL(fileItem);
    });
    setFieldValue('isActive', true);
  };

  const handleOpenModal = () => setFieldValue('isWarningModal', true);
  const handlerPhotoFocus = () =>
    setFieldValue('isDraggablePhotoFocus', !values.isDraggablePhotoFocus);

  return (
    <SContainer
      onDragEnterCapture={handlerPhotoFocus}
      onDragLeaveCapture={handlerPhotoFocus}
      ref={ref}
      onClick={() => setFieldValue('isActive', true)}
      $position={values.isActive}
      $isDraggable={isDraggablePhoto}
    >
      {isDraggablePhoto && <DragInput multiple type="file" onChange={handlerPhoto} />}
      {isDraggablePhoto && (
        <SDragField isFocus={values.isDraggablePhotoFocus}>
          {values.isDraggablePhotoFocus
            ? 'Претащите сюда свои фотографии'
            : 'Отпустите кнопку мышки чтоб закрепить фотографии'}
        </SDragField>
      )}
      {!isDraggablePhoto && (
        <>
          <Content />
          {!!data.photos.length && <Photos data={data} setData={setData} />}
          {!!data.files.length && <Files data={data} setData={setData} />}

          <SContainerIcons $position={values.isActive}>
            <Icons setData={setData} data={data} />
            {values.isActive && (
              <SSubmit>
                {!isCorrect && <Settings />}
                <BaseButton htmlType="submit" disabled={isCorrect} height="30px">
                  Отправить
                </BaseButton>
              </SSubmit>
            )}
          </SContainerIcons>
        </>
      )}
    </SContainer>
  );
};

export default ContainerForm;
