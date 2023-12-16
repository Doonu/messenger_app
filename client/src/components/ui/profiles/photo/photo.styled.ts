import styled from 'styled-components';

interface IImgProps {
  color: string;
}

export const SContainer = styled.div<IImgProps>`
  background: ${({ color }) => color};
  font-size: 22px;
  min-width: 40px;
  height: 40px;
  border-radius: 99%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.active};
`;
