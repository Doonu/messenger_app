import styled from 'styled-components';

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${({ theme }) => theme.colors.active};
`;
