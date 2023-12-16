import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../interceptors';
import { ApiLogin, ILogin, IPostLogin } from './model/login';

import { IConfigAsyncThunk as IDefaultConfigAsyncThunk, IError } from '../../models/errors';
import { RootState } from '../../../app/store';
import { AxiosError } from 'axios';
import { showMessage } from '../../../entities/notification/notification.slice';

interface IConfigAsyncThunk extends IDefaultConfigAsyncThunk {
  state: RootState;
}

const postLogin = createAsyncThunk<IPostLogin, ILogin, IConfigAsyncThunk>(
  'auth/login',
  ({ email, password }, { rejectWithValue, dispatch }) => {
    return API<ApiLogin>({
      url: `http://localhost:5000/api/auth/login`,
      method: 'POST',
      data: { email, password },
    })
      .then(({ data }) => {
        localStorage.setItem(
          'session',
          JSON.stringify({
            at: data.token,
          })
        );

        return {
          token: data.token,
        };
      })
      .catch(({ response }: AxiosError<IError>) => {
        const title = response?.data.message || 'Неизвестная ошибка';
        dispatch(
          showMessage({
            title: title,
            type: 'error',
            level: 'medium',
          })
        );
        return rejectWithValue(response?.data);
      });
  }
);

export default postLogin;
