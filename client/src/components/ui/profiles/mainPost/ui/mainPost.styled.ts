import styled from 'styled-components';

export const SContainer = styled.div`
  display: flex;

  gap: 10px;
  font-size: 13px;
  width: 150px;
  height: max-content;
  border-radius: 10px;
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryBg};
    cursor: pointer;
  }
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
`;
