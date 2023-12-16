import styled from 'styled-components';
import { FiSettings } from 'react-icons/fi';

export const Setting = styled(FiSettings).attrs({
  size: 35,
})`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
