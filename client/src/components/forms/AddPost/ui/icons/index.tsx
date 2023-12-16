import React, { ChangeEvent, Dispatch, FC, MouseEvent, SetStateAction, useRef } from 'react';
import { SContainerIcon, SDivider, SIcons } from '../containerForm/containerForm.styled';
import { Camera, Music, Poster, SFile, Video } from '../../../../../shared/assets/icons';
import { useFormikContext } from 'formik';
import { IAllFiles, IFiles, IPhotos, IPost } from '../../model/IPost';
import { v4 } from 'uuid';

interface IIconsProps {
  data: IAllFiles;
  setData: Dispatch<SetStateAction<IAllFiles>>;
}

const Icons: FC<IIconsProps> = ({ setData, data }) => {
  const { values, setFieldValue } = useFormikContext<IPost>();

  const cameraRef = useRef<any>(null);
  const fileRef = useRef<any>(null);

  const handleCamera = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    cameraRef.current.click();
  };

  const handleFile = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    fileRef.current.click();
  };

  const handleOpenModal = () => setFieldValue('isWarningModal', true);

  const handlerFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    if (data.files.length + files.length > 10) {
      setFieldValue('isWarningModalTitle', 'Вы можете прикрепить к посту не больше 10 файлов');
      handleOpenModal();
      return;
    }

    Array.from(files).forEach((fileItem) => {
      let reader = new FileReader();

      reader.onloadend = () => {
        const result = reader.result;

        const item: IFiles = {
          file: fileItem,
          url: result,
          id: v4(),
        };

        setData((prev) => {
          return { ...prev, files: [item, ...prev.files] };
        });
      };

      reader.readAsDataURL(fileItem);
    });
    setFieldValue('isActive', true);
  };

  const handlerPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    if (data.photos.length + files.length > 5) {
      setFieldValue('isWarningModalTitle', 'Вы можете прикрепить к посту не больше 5 фотографий');
      handleOpenModal();
      return;
    }

    Array.from(files).forEach((fileItem) => {
      let reader = new FileReader();

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
      reader.readAsDataURL(fileItem);
    });
    setFieldValue('isActive', true);
  };

  return (
    <SIcons>
      {values.isActive && (
        <SContainerIcon>
          <Poster />
        </SContainerIcon>
      )}
      {values.isActive && <SDivider />}
      <SContainerIcon onClick={handleCamera}>
        <Camera title={'Фото'}></Camera>
        <input
          accept="image/*"
          ref={cameraRef}
          multiple
          type="file"
          onChange={handlerPhoto}
          style={{ display: 'none' }}
        />
      </SContainerIcon>
      <SContainerIcon>
        <Video />
      </SContainerIcon>
      <SContainerIcon>
        <Music />
      </SContainerIcon>
      <SContainerIcon onClick={handleFile}>
        <SFile title={'Файл'} />
        <input
          accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf"
          ref={fileRef}
          multiple
          type="file"
          onChange={handlerFile}
          style={{ display: 'none' }}
        />
      </SContainerIcon>
    </SIcons>
  );
};

export default Icons;
