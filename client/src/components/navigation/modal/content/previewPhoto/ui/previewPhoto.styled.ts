import styled from 'styled-components';
import { Carousel } from 'antd';
import { ArrowLeft, ArrowRight } from '../../../../../../shared/assets/icons';

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SContent = styled.div`
  display: flex;
`;

export const SLeft = styled.div`
  height: 88vh;
  padding: 0;
  user-select: none;
`;

export const SCarousel = styled(Carousel)`
  height: 100%;
  width: 650px;
`;

export const SInfoPic = styled.div`
  display: flex;
  justify-content: center;

  padding: 10px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.active};
`;

export const SImg = styled.img`
  height: 88vh;
  object-fit: cover;
  border-radius: 8px 0 0 0;
  width: 650px;
`;

export const SRight = styled.div`
  border-radius: 0 8px 0 0;
  width: 400px;
  background: ${({ theme }) => theme.colors.bg};
`;

export const SContainerProfile = styled.div`
  padding: 15px 0 15px 35px;
  border-radius: 0 8px 0 0;
`;

export const SContainerInfo = styled.div`
  padding: 15px 0 15px 35px;
  background: ${({ theme }) => theme.colors.secondaryBg};
`;

export const SImgContainer = styled.div`
  position: relative;
  width: max-content;
  border-radius: 118px 0 0 0;
`;

export const SArrowLeft = styled(ArrowRight)`
  position: absolute;
  top: 45%;
  left: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.4;
  }
`;
export const SArrowRight = styled(ArrowLeft)`
  position: absolute;
  top: 45%;
  right: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.4;
  }
`;

export const Descriptions = styled.div`
  font-size: 14px;
  background: ${({ theme }) => theme.colors.bg};
  padding: 15px 0 15px 35px;
  color: ${({ theme }) => theme.colors.active};
`;
