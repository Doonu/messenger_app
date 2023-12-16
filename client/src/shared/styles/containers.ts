import styled from 'styled-components';

export const Containers = styled.div`
  max-width: 1460px;
  margin: 0 auto;
  height: calc(100vh - 91px);
  user-select: none;
  padding: 20px 10px 0 10px;
`;

export const ContainerForm = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const ContainerAuth = styled.div`
  max-width: 700px;
  min-width: 700px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.active};
  box-shadow: 0 0 8px 1px ${({ theme }) => theme.colors.active};
  user-select: none;
`;

export const BlockContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.secondaryBg};
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  border-radius: 10px;
  padding: 15px;
`;
