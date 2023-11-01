import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import getProfile from '../../shared/api/user/getProfile';

const AuthProvider = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfile({}));
  }, []);
  return null;
};

export default AuthProvider;
