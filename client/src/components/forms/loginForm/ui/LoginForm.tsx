import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import {
  SBaseButton,
  SFormContainer,
  SInput,
  SInputForm,
  SLink,
  SLinkWrap,
  SSubTitle,
} from './loginForm.styled';
import { SForm, SLogo, SLogoContainer, STitle } from './loginForm.styled';
import { ContainerAuth } from '../../../../shared/styles/containers';
import { ILogin } from '../model/ILogin';
import { useAppDispatch } from '../../../../hooks/redux';
import postLogin from '../../../../shared/api/auth/postLogin';
import getProfile from '../../../../shared/api/user/getProfile';

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const initialValue: ILogin = {
    email: '',
    password: '',
  };

  const formSubmit = (values: ILogin, formikHelpers: FormikHelpers<ILogin>) => {
    dispatch(postLogin(values))
      .unwrap()
      .then((fetchedId) => {
        dispatch(getProfile({ id: fetchedId.id }))
          .unwrap()
          .catch(() => {});
      })
      .catch(() => {});
  };

  return (
    <ContainerAuth>
      <Formik
        enableReinitialize
        initialValues={initialValue}
        validateOnChange={false}
        validateOnBlur={false}
        validateOnMount={false}
        onSubmit={formSubmit}
      >
        {({ handleSubmit, setFieldValue, values, errors, handleBlur, getFieldHelpers }) => (
          <SForm layout="vertical" onFinish={handleSubmit}>
            <SFormContainer>
              <STitle>С возвращением!</STitle>
              <SSubTitle>Мы так рады видеть вас!</SSubTitle>
              <SInputForm
                help={errors.email}
                label="Адрес электронной почты"
                name="Адрес электронной почты"
                rules={[
                  {
                    required: true,
                    message: 'Пожалуйста введите адрес электронной почты',
                    whitespace: true,
                  },
                  {
                    type: 'email',
                    message: 'Адрес электронной почты невалидный',
                    whitespace: false,
                  },
                ]}
              >
                <SInput
                  border="none"
                  name="email"
                  onChange={(e) => setFieldValue('email', e.target.value)}
                  value={values.email}
                />
              </SInputForm>
              <SInputForm
                help={errors.password}
                label="Пароль"
                name="Пароль"
                rules={[
                  { required: true, message: 'Пожалуйста введите пароль', whitespace: false },
                  { min: 4, message: 'Минимальное кол-во символов: 4', whitespace: false },
                  { max: 16, message: 'Максимальное кол-во символов: 16', whitespace: false },
                ]}
              >
                <SInput
                  border="none"
                  name="password"
                  type="password"
                  onBlur={handleBlur}
                  onChange={(e) => setFieldValue('password', e.target.value)}
                  value={values.password}
                />
              </SInputForm>
              <SLink to={'/'}>Забыли пароль?</SLink>
              <SBaseButton htmlType="submit">Вход</SBaseButton>
              <SLinkWrap>
                Нужна учетная запись? <SLink to={'/registration'}>Зарегестрироваться</SLink>
              </SLinkWrap>
            </SFormContainer>
            <SLogoContainer>
              <SLogo $shadow />
              <STitle>Discord - Messenger</STitle>
            </SLogoContainer>
          </SForm>
        )}
      </Formik>
    </ContainerAuth>
  );
};

export default LoginForm;
