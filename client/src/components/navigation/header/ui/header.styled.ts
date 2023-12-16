import styled from 'styled-components';
import MainProfile from '../../../ui/profiles/main';

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
  padding: 0 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    & > div:nth-child(3) {
      display: none !important;
    }
  }
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

export const SMainProfile = styled(MainProfile)`
  margin-left: 80px;
`;
