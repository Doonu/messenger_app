import React, { FC, useState } from 'react';
import {
  SBeautPen,
  SClose,
  SCloseContainer,
  SContainerIcons,
  SContainerPhoto,
  SImg,
  SMagnifier,
} from './photo.styled';
import { IPhoto } from '../model/IPhoto';

//TODO: Перенести в widgets

export const Photo: FC<IPhoto> = ({ url, onDelete, onClick }) => {
  const [hoveredPhoto, setHoveredPhoto] = useState(false);

  const handleHovered = () => setHoveredPhoto((prev) => !prev);

  return (
    <SContainerPhoto onMouseEnter={handleHovered} onMouseLeave={handleHovered}>
      {hoveredPhoto && (
        <SCloseContainer>
          <SClose onClick={onDelete}></SClose>
        </SCloseContainer>
      )}
      {hoveredPhoto && (
        <SContainerIcons>
          <SMagnifier onClick={onClick} title="Открыть" />
          <SBeautPen title="Фоторедактор" />
        </SContainerIcons>
      )}
      <SImg draggable="false" src={url} alt="" />
    </SContainerPhoto>
  );
};
