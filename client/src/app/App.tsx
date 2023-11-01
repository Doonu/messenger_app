import React, { useEffect } from 'react';
import Providers from './providers';
import { useAppDispatch } from '../hooks/redux';
import getProfile from '../shared/api/user/getProfile';

const App = () => {
  //TODO: АЛИАС
  //TODO: Сделать анимацию перехода между страницами
  //TODO: Все иконки вынести в отдельный файл и сделать компонентами

  return <Providers />;
};

export default App;
