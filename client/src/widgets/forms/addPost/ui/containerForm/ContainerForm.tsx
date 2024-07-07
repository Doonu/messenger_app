import React, { ChangeEvent, FC, useState } from 'react';
import { useFormikContext } from 'formik';
import { useAppSelector, useAppDispatch, useOutsideClick } from '@shared/hooks';
import { selectorEditedPost, selectorPost } from '@entities/post';
import { selectorProfileLoader } from '@entities/profile';
import { ActionIcons } from '@features/ActionIcons';
import { BaseButton } from '@shared/components';
import { addPendingList } from '@shared/api';
import { extensionPhotoList } from '@shared/util';
import { Files } from '@features/Files';
import { Photos } from '@features/Photos';

import { SkeletonAddPost } from '../skeleton';
import Features from '../features';
import Content from '../content';
import {
  SContainer,
  SContainerIcons,
  SDragField,
  SSubmit,
  DragInput,
} from './containerForm.styled';
import { IContainerFormProps, IPost } from '../../model/IPost';
import Settings from '../settings/Settings';

const ContainerForm: FC<IContainerFormProps> = ({
  isDraggablePhoto,
  handlerChange,
  data,
  setData,
  setCurrentIndex,
  setIsPreviewPhoto,
}) => {
  const dispatch = useAppDispatch();

  const { values, setFieldValue } = useFormikContext<IPost>();

  const editedPost = useAppSelector(selectorEditedPost);
  const posts = useAppSelector(selectorPost);
  const loaderProfile = useAppSelector(selectorProfileLoader);

  const [loadingPhotos, setLoadingPhotos] = useState(false);
  const [loadingFiles, setLoadingFiles] = useState(false);

  const isCorrect = !values.content.length && !data.photos.length && !data.files.length;
  const isEditPost = posts.find((post) => post.id === editedPost?.id);

  const ref = useOutsideClick(() => {
    if (isCorrect) setFieldValue('isActive', false);
  });

  const handlerChangeTitle = (title: string) => {
    setFieldValue('isWarningModalTitle', title);
    setFieldValue('isWarningModal', true);
  };

  const handlerActive = () => {
    setFieldValue('isActive', true);
  };

  const handlerPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    handlerChange();
    handlerActive();

    const { files } = e.target;

    if (!files) return;

    const filteredPhoto = Array.from(files).filter((file) =>
      extensionPhotoList.includes(file.name.split('.')[file.name.split('.').length - 1])
    );

    if (data.photos.length + filteredPhoto.length > 5) {
      handlerChangeTitle('Вы можете прикрепить к посту не больше 5 фотографий');
      return;
    }

    setLoadingPhotos(true);

    dispatch(addPendingList({ files: Array.from(filteredPhoto), status: 1 }))
      .unwrap()
      .then((fetchFiles) => {
        setData((prev) => {
          return { ...prev, photos: [...fetchFiles, ...prev.photos] };
        });
      })
      .catch(() => {})
      .finally(() => {
        setLoadingPhotos(false);
      });
  };

  const handlerPhotoFocus = () => {
    if (isEditPost) {
      setFieldValue('isDraggablePhotoFocus', !values.isDraggablePhotoFocus);
    }
  };

  if (loaderProfile) {
    return <SkeletonAddPost />;
  }

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

          <Photos
            loader={loadingPhotos}
            setCurrentIndex={setCurrentIndex}
            data={data}
            setData={setData}
            setIsPreviewPhoto={setIsPreviewPhoto}
          />

          <Files data={data} setData={setData} loader={loadingFiles} />

          {data.photos.length > 1 && <Features />}
          <SContainerIcons $position={values.isActive}>
            <ActionIcons
              setLoadingFiles={setLoadingFiles}
              setLoadingPhoto={setLoadingPhotos}
              setData={setData}
              data={data}
              onActive={handlerActive}
              onTitle={handlerChangeTitle}
              isActive={values.isActive}
              statusPhoto={1}
            />
            {values.isActive && (
              <SSubmit>
                {!isCorrect && <Settings />}
                <BaseButton htmlType="submit" disabled={isCorrect} height="30px">
                  Опубликовать
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
