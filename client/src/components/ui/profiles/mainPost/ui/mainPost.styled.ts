import styled from 'styled-components';

export const SContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 20px;
  font-size: 13px;
  width: 150px;
  height: max-content;
  border-radius: 10px;
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryBg};
    cursor: pointer;
  }
`;

interface SImgSubstituteProps {
  color: string;
}

export const SImgSubstitute = styled.div<SImgSubstituteProps>`
  min-width: 40px;
  height: 40px;
  border-radius: 99%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;

  background: ${({ color }) => color};
  color: ${({ theme }) => theme.colors.active};
`;

export const SImg = styled.img`
  min-width: 50px;
  height: 50px;
  object-fit: cover;
  margin: 0;
  border-radius: 99%;
  flex: 1;
`;

export const SContainerName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const SName = styled.div`
  font-size: 20px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.active};
`;

export const STime = styled.div`
  font-size: 15px;
  width: max-content;
  color: ${({ theme }) => theme.colors.text};
`;
