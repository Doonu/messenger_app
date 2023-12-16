import React, { FC } from 'react';
import Word from '../../../../shared/assets/icons/word';
import { SClose, SContainer, SLink, SText } from './file.styles';
import Pdf from '../../../../shared/assets/icons/pdf';

interface IFile {
  onDelete: () => void;
  url: string;
  file: {
    size: number;
    name: string;
  };
}

const File: FC<IFile> = ({ url, onDelete, file }) => {
  const arrayNames = file.name.split('.');
  const isIcons = arrayNames[arrayNames.length - 1];

  return (
    <SContainer title={file.name}>
      <SClose onClick={onDelete}>X</SClose>
      <SLink draggable="false" target="_blank" download href={url}>
        {(isIcons === 'docx' || isIcons === 'doc') && <Word />}
        {isIcons === 'pdf' && <Pdf />}

        <SText>{file.name}</SText>
      </SLink>
    </SContainer>
  );
};

export default File;
