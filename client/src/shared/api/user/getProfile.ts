import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../interceptors';

import { IConfigAsyncThunk as IDefaultConfigAsyncThunk, IError } from '../../models/errors';
import { RootState } from '../../../app/store';
import { AxiosError } from 'axios';
import { showMessage } from '../../../entities/notification/notification.slice';
import { logout } from '../../../entities/auth/auth.slice';

interface IConfigAsyncThunk extends IDefaultConfigAsyncThunk {
  state: RootState;
}

export interface IGetProfile {
  name: string;
  email: string;
  banned: boolean;
  banReason: null | string;
  id: string;
  roles: {
    value: string;
    createdAt: string;
  }[];
  avatar: string;
}

export interface ApiProfile {
  name: string;
  email: string;
  banned: boolean;
  banReason: null | string;
  id: string;
  roles: {
    id: number;
    value: string;
    description: string;
    createdAt: string;
  }[];
  imgSubstitute: string;
}

const getProfile = createAsyncThunk<IGetProfile, undefined, IConfigAsyncThunk>(
  'auth/getProfile',
  (_, { rejectWithValue, dispatch }) => {
    return API<ApiProfile>({
      url: `http://localhost:5000/api/users/profile`,
      method: 'POST',
    })
      .then(({ data }) => ({
        name: data.name,
        email: data.email,
        banned: data.banned,
        id: data.id,
        banReason: data.banReason,
        avatar: data.imgSubstitute || 'тут будет картинка',
        roles: data.roles.map(({ value, createdAt }) => {
          return {
            value,
            createdAt,
          };
        }),
      }))
      .catch(({ response }: AxiosError<IError>) => {
        const title = response?.data.message || 'Неизвестная ошибка';
        dispatch(logout());
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

export default getProfile;
