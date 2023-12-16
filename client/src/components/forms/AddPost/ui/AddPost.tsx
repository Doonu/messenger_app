import React, { FC, useState } from 'react';

import { useAppDispatch } from '../../../../hooks/redux';
import { Formik } from 'formik';

import { Form } from 'antd';
import { WarningCountPhotos } from '../../../navigation/modal';
import ModalBase from '../../../navigation/modal/ui/ModalBase';
import { PreviewPhoto } from '../../../navigation/modal/content/previewPhoto';
import postCreate from '../../../../shared/api/post/postCreate';
import ContainerForm from './containerForm/ContainerForm';

import { initialValues } from '../lib/initialValues';
import { IAllFiles, IPost } from '../model/IPost';

//TODO: Сделать контейнер и сделать только в нем опасити
//TODO: Сделать мазайку для картинок

interface IPostProps {
  isDraggablePhoto: boolean;
  handlerChange: () => void;
}

const AddPost: FC<IPostProps> = ({ isDraggablePhoto, handlerChange }) => {
  const [allFiles, setAllFiles] = useState<IAllFiles>({ photos: [], files: [] });

  const dispatch = useAppDispatch();

  return (
    <Formik<IPost>
      initialValues={initialValues}
      onSubmit={(values, { resetForm, setFieldValue }) => {
        setFieldValue('isActive', false);
        const photosSend = allFiles?.photos.map(({ photo }) => photo);
        const filesSend = allFiles?.files.map(({ file }) => file);

        if (!photosSend) return;
        dispatch(
          postCreate({
            content: values.content.toString().split('\n'),
            files: [...photosSend, ...filesSend],
            isDisabledComments: values.isDisabledComments,
            view: values.view,
          })
        );

        setAllFiles({ photos: [], files: [] });
        resetForm();
      }}
    >
      {({ values, setFieldValue, handleSubmit }) => (
        <Form encType="multipart/form-data" layout="vertical" onFinish={handleSubmit}>
          <ModalBase
            onClose={() => setFieldValue('isWarningModal', false)}
            width="400px"
            open={values.isWarningModal}
          >
            <WarningCountPhotos message={values.isWarningModalTitle} />
          </ModalBase>
          <ModalBase
            isFooter={false}
            width="max-content"
            onClose={() => setFieldValue('isPreviewPhoto', false)}
            open={values.isPreviewPhoto}
            padding="0 0 0px 0"
          >
            {allFiles?.photos && (
              <PreviewPhoto
                list={allFiles.photos}
                description={values.content.toString().split('\n')}
              />
            )}
          </ModalBase>
          {allFiles && (
            <ContainerForm
              setData={setAllFiles}
              data={allFiles}
              isDraggablePhoto={isDraggablePhoto}
              handlerChange={handlerChange}
            />
          )}
        </Form>
      )}
    </Formik>
  );
};

export default AddPost;
