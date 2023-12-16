import React, { Dispatch, FC, SetStateAction } from 'react';
import { File } from '../../../../ui/file';
import { IAllFiles } from '../../model/IPost';
import { SFiles } from './files.styled';

interface IFilesProps {
  data: IAllFiles;
  setData: Dispatch<SetStateAction<IAllFiles>>;
}

const Files: FC<IFilesProps> = ({ data, setData }) => {
  const handlerFilterFiles = (id: string) => {
    const filterFiles = data.files.filter((file) => file.id !== id);
    setData({ ...data, files: filterFiles });
  };

  return (
    <SFiles>
      {data.files.map(({ id, url, file }, i) => (
        <File file={file} key={id} url={url} onDelete={() => handlerFilterFiles(id)} />
      ))}
    </SFiles>
  );
};

export default Files;
