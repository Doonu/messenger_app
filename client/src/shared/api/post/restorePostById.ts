import { IConfigAsyncThunk as IDefaultConfigAsyncThunk, IError } from '../../models/errors';
import { RootState } from '../../../app/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../interceptors';
import { AxiosError } from 'axios';
import { showMessage } from '../../../entities/notification/notification.slice';
import { IPostState } from '../../../entities/post/model/IPost';

interface IConfigAsyncThunk extends IDefaultConfigAsyncThunk {
  state: RootState;
}

const restorePostById = createAsyncThunk<number, number, IConfigAsyncThunk>(
  'post/restore',
  (postId, { rejectWithValue, dispatch }) => {
    return API<IPostState>({
      url: `http://localhost:5000/api/posts/restore/${postId}`,
      method: 'POST',
    })
      .then(({ data }) => {
        return data.id;
      })
      .catch(({ response }: AxiosError<IError>) => {
        dispatch(
          showMessage({
            title: `Неудалось восстановить пост`,
            type: 'warning',
            level: 'medium',
          })
        );

        return rejectWithValue(response?.data);
      });
  }
);

export default restorePostById;
