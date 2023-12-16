import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../interceptors';

import { IConfigAsyncThunk as IDefaultConfigAsyncThunk, IError } from '../../models/errors';
import { RootState } from '../../../app/store';
import { AxiosError } from 'axios';
import { showMessage } from '../../../entities/notification/notification.slice';
import { ApiRegister, IPostRegister, IRegister } from './model/register';

interface IConfigAsyncThunk extends IDefaultConfigAsyncThunk {
  state: RootState;
}

const postRegistration = createAsyncThunk<IPostRegister, IRegister, IConfigAsyncThunk>(
  'auth/login',
  ({ email, password, name }, { rejectWithValue, dispatch }) => {
    return API<ApiRegister>({
      url: `http://localhost:5000/api/auth/registration`,
      method: 'POST',
      data: { email, password, name },
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

export default postRegistration;
