import React, { Dispatch, FC, SetStateAction } from 'react';
import { SPhotos } from './photos.styled';
import { Photo } from '../../../../ui/photos/photo';
import { useFormikContext } from 'formik';
import { IAllFiles, IPost } from '../../model/IPost';

interface IPhotosProps {
  data: IAllFiles;
  setData: Dispatch<SetStateAction<IAllFiles>>;
}

const Photos: FC<IPhotosProps> = ({ data, setData }) => {
  const { values, setFieldValue } = useFormikContext<IPost>();

  const handleOpenModalPhoto = (index: number) => {
    setFieldValue('currentIndex', index + 1);
    setFieldValue('isPreviewPhoto', true);
  };

  const handleDelete = (id: string) => {
    const filteredList = data.photos.filter((file) => file.id !== id);
    setData({ ...data, photos: filteredList });
  };

  return (
    <SPhotos $position={values.isActive}>
      {data.photos.map(({ url, id }, index) => (
        <Photo
          onClick={() => handleOpenModalPhoto(index)}
          onDelete={() => handleDelete(id)}
          url={url}
          key={id + index}
        />
      ))}
    </SPhotos>
  );
};

export default Photos;
