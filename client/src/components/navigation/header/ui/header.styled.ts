import styled from 'styled-components';

export const SContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryText};
`;

export const SWrapper = styled.div`
  max-width: 1460px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 90px;
  justify-content: space-between;
`;

export const STitle = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 1px;
`;

export const SLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 120px;
`;
