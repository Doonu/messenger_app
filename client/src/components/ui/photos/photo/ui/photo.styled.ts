import styled from 'styled-components';
import { BeautPen, Close, Magnifier } from '../../../../../shared/assets/icons';

export const SContainerPhoto = styled.div`
  position: relative;

  width: 150px;
  height: 200px;
  cursor: pointer;
`;

export const SImg = styled.img`
  width: inherit;
  height: inherit;
`;

export const SCloseContainer = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;

export const SClose = styled(Close)`
  font-size: 30px;
  &:hover {
    transform: scale(1.2);
  }
`;

export const SContainerIcons = styled.div`
  background: rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const SMagnifier = styled(Magnifier)`
  position: relative;
  z-index: 2;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;
export const SBeautPen = styled(BeautPen)`
  position: relative;
  z-index: 2;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;
