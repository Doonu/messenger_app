import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';

const App = () => {
  const isAuth = true;
  return (
    <BrowserRouter>
      <Suspense fallback={<>Загрзука...</>}>
        <Routes>
          {isAuth
            ? privateRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.component />} />
              ))
            : publicRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.component />} />
              ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
