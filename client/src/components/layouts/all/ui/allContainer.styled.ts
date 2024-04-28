import styled from 'styled-components';

export const SMain = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;

export const SAffixContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

interface SCenter {
  $isFooter: boolean;
  $isSticky?: boolean;
}

export const SCenter = styled.div<SCenter>`
  display: flex;
  flex-direction: ${({ $isSticky }) => ($isSticky ? 'row' : 'column')};
  margin: 0 auto;
  flex: 1;
  min-height: ${({ $isFooter }) => ($isFooter ? 'calc(100vh - 200px)' : 'calc(100vh - 115px)')};
`;
