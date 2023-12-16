import { createAsyncThunk } from '@reduxjs/toolkit';
import { IConfigAsyncThunk as IDefaultConfigAsyncThunk, IError } from '../../models/errors';
import { RootState } from '../../../app/store';
import API from '../interceptors';
import { showMessage } from '../../../entities/notification/notification.slice';
import { IPostState } from '../../../entities/post/model/IPost';
import { AxiosError } from 'axios';

interface IConfigAsyncThunk extends IDefaultConfigAsyncThunk {
  state: RootState;
}

const deletePostById = createAsyncThunk<IPostState, number, IConfigAsyncThunk>(
  'post/delete',
  (postId, { rejectWithValue, dispatch }) => {
    return API<IPostState>({
      url: `http://localhost:5000/api/posts/${postId}`,
      method: 'DELETE',
    })
      .then(({ data }) => {
        return data;
      })
      .catch(({ response }: AxiosError<IError>) => {
        let message = 'Неудалось удалить пост';
        if (response?.status === 400) {
          message = 'У вас нет прав на удаления поста';
        }

        dispatch(
          showMessage({
            title: message,
            type: 'warning',
            level: 'medium',
          })
        );

        return rejectWithValue(response?.data);
      });
  }
);

export default deletePostById;
