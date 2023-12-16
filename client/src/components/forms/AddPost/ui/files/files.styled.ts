import styled from 'styled-components';

export const SFiles = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  height: 100%;
  width: 100%;
  flex-wrap: nowrap;
  overflow-x: auto;
  &::-webkit-scrollbar {
    background: ${({ theme }) => theme.colors.secondaryBg};
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.secondaryText};
  }
`;
