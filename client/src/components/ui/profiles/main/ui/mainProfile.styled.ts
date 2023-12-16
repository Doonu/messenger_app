import styled from 'styled-components';
import { ArrowDown } from '../../../../../shared/assets/icons';
import { Dropdown } from 'antd';

export const SDropdown = styled(Dropdown)`
  margin-left: 20px;
`;

export const SContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  padding: 5px;
  font-size: 13px;
  height: max-content;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.active};
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryBg};
    cursor: pointer;
  }
`;

export const SImg = styled.img`
  min-width: 40px;
  height: 40px;
  border-radius: 99%;
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
`;

export const SName = styled.div`
  font-size: 15px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.active};
`;

interface SArrowDownProps {
  $isActive: boolean;
}

export const SArrowDown = styled(ArrowDown)<SArrowDownProps>`
  transform: rotate(${({ $isActive }) => ($isActive ? '0deg' : '180deg')});
  transition: 0.5s all;
`;
