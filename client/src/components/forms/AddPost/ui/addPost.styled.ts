import styled, { css } from 'styled-components';
import TextArea from 'antd/es/input/TextArea';
import { Form } from 'antd';

interface IImgProps {
  color: string;
}

interface IPositionProps {
  position: boolean;
}

export const SContainer = styled(Form)<IPositionProps>`
  position: relative;
  display: flex;
  align-items: center;
  height: max-content;
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  ${({ position }) =>
    position &&
    css`
      flex-direction: column;
      align-items: flex-start;
      gap: 25px;
    `}

  background: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: ${({ theme }) => theme.radius.base};
  padding: 15px;

  margin-bottom: 15px;
`;

export const SImg = styled.div<IImgProps>`
  background: ${({ color }) => color};
  min-width: 40px;
  height: 40px;
  border-radius: 99%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.active};
`;

export const SMain = styled.div<IPositionProps>`
  display: flex;
  align-items: center;
  gap: 20px;
  height: max-content;
`;

export const SIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SContainerIcons = styled.div<IPositionProps>`
  ${({ position }) =>
    !position &&
    css`
      position: absolute;
      right: 20px;
    `}

  ${({ position, theme }) =>
    position &&
    css`
      padding: 10px 15px;
      border-top: 1px solid ${theme.colors.secondaryText};
      width: 103.5%;
      margin: 0 -15px -15px -15px;
      justify-content: space-between;
    `}


  display: flex;
  align-items: center;
  gap: 15px;
`;

export const SInput = styled(TextArea)<IPositionProps>`
  color: ${({ theme }) => theme.colors.active};
  font-size: 18px;
  width: 840px;
  min-height: 60px;
  height: max-content;

  margin: -20px -20px -35px -20px;
  flex: 1;
  padding-top: 15px;

  resize: none !important;
  background: inherit;
  border: none;
  outline: none;

  &:focus {
    box-shadow: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ position }) => (!position ? '18px' : '25px')};
  }
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const SDivider = styled.div`
  width: 1px;
  height: 10px;
  display: block;
  background: ${({ theme }) => theme.colors.secondaryText};
  margin: 0 -5px;
`;

export const SSubmit = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
