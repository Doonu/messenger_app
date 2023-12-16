import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import getProfile from '../../shared/api/user/getProfile';
import { isAuthSelector } from '../../entities/auth/auth.selectors';

const AuthProvider = () => {
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector(isAuthSelector);

  useEffect(() => {
    if (isAuth) dispatch(getProfile());
  }, [isAuth]);

  return null;
};

export default AuthProvider;
