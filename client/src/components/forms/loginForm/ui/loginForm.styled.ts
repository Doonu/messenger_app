import styled from 'styled-components';
import Logo from '../../../ui/logo';
import { Form } from 'antd';
import Input from '../../../ui/inputs/baseInput';
import { Link } from 'react-router-dom';
import BaseButton from '../../../ui/buttons/baseButton';

export const SForm = styled(Form)`
  display: flex;
  align-items: center;
  gap: 70px;

  padding-right: 20px;
`;

export const SFormContainer = styled.div`
  flex: 1;
`;

export const SLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const SInputForm = styled(Form.Item).attrs({
  validateTrigger: 'onBlur',
})`
  .ant-form-item-label > label {
    color: ${({ theme }) => theme.colors.text};
  }
  .ant-form-item-explain-success {
    color: ${({ theme }) => theme.colors.danger};
  }
`;

export const SLink = styled(Link)`
  color: ${({ theme }) => theme.colors.link};
`;

export const SInput = styled(Input).attrs({
  height: '40px',
})``;

export const SLogo = styled(Logo).attrs({
  size: 120,
  sizeBg: '150px',
  color: 'white',
})`
  align-self: center;
`;

export const STitle = styled.h1`
  color: ${({ theme }) => theme.colors.active};
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

export const SSubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 17px;

  text-align: center;
  padding-bottom: 20px;
`;

export const SLinkWrap = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;

export const SBaseButton = styled(BaseButton)`
  margin: 10px 0 5px 0;
`;
