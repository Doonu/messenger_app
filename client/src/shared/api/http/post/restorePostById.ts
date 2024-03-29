import { IConfigAsyncThunk as IDefaultConfigAsyncThunk, IError } from '../../../models/errors';
import { RootState } from '../../../../app/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../interceptors';
import { AxiosError } from 'axios';
import { showMessage } from '../../../../entities/notification/notification.slice';
import { IPostState } from '../../../../entities/post/model/IPost';

interface IConfigAsyncThunk extends IDefaultConfigAsyncThunk {
  state: RootState;
}

interface IRestorePostById {
  postId: number;
}

const restorePostById = createAsyncThunk<IPostState, IRestorePostById, IConfigAsyncThunk>(
  'post/restore',
  ({ postId }, { rejectWithValue, dispatch }) => {
    return API<IPostState>({
      url: `api/posts/restore/${postId}`,
      method: 'POST',
    })
      .then(({ data }) => {
        return data;
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
