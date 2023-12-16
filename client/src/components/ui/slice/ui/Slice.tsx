import React, { FC, useEffect, useState } from 'react';
import { SContainer, SViewFull } from './slice.styled';

interface ISlice {
  content: string[];
}

export const Slice: FC<ISlice> = ({ content }) => {
  const [isActive, setIsActive] = useState(false); // Состояние для отображения показать польностью или скрыть
  const [state, setState] = useState<string[]>(content.slice(0, 8)); // Состояние content
  const [hidden, setHidden] = useState(false); // Состояние для отображения тумблера

  const handleViewFull = () => {
    setIsActive(true);
    setState(content);
  };

  const handleHidden = () => {
    setIsActive(false);
    setState(content.slice(0, 8));
  };

  useEffect(() => {
    setHidden(content.length === content.slice(0, 8).length);
    if (content.length === content.slice(0, 8).length) {
      setState(content);
      setIsActive(true);
    } else {
      setIsActive(false);
      setState(content.slice(0, 8));
    }
  }, [content]);

  return (
    <SContainer>
      {state.map((str, i) => (
        <div key={i}>{str}</div>
      ))}
      {!isActive && !hidden && (
        <SViewFull onClick={handleViewFull}>Показать полностью...</SViewFull>
      )}
      {isActive && !hidden && <SViewFull onClick={handleHidden}>Скрыть</SViewFull>}
    </SContainer>
  );
};
