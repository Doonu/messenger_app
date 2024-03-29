import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { checkAuth } from '../../entities/auth/auth.slice';
import { isAuthSelector } from '../../entities/auth/auth.selectors';
import { LoaderPage } from '../../components/ui/loaders';
import Login from '../../pages/public/login';
import { Feed } from '../../pages/private/feed';

const Router = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);

  useEffect(() => {
    dispatch(checkAuth());
  }, [isAuth]);

  return (
    <BrowserRouter>
      <Suspense fallback={LoaderPage()}>
        <Routes>
          {isAuth
            ? privateRoutes.map((route) => (
                <>
                  <Route key={route.path} path={route.path} element={<route.component />} />
                  {route.path && <Route key={route.path} path="/*" element={<Feed />} />}
                </>
              ))
            : publicRoutes.map((route) => (
                <>
                  <Route key={route.path} path={route.path} element={<route.component />} />
                  {route.path && <Route key={route.path} path="/*" element={<Login />} />}
                </>
              ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
