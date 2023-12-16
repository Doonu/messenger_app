import { createAsyncThunk } from '@reduxjs/toolkit';
import { IConfigAsyncThunk as IDefaultConfigAsyncThunk, IError } from '../../models/errors';
import { RootState } from '../../../app/store';
import API from '../interceptors';
import { AxiosError } from 'axios';
import { showMessage } from '../../../entities/notification/notification.slice';
import { IToggleCommentsById } from '../../models/IPost';

interface IConfigAsyncThunk extends IDefaultConfigAsyncThunk {
  state: RootState;
}

const toggleCommentsById = createAsyncThunk<
  IToggleCommentsById,
  IToggleCommentsById,
  IConfigAsyncThunk
>('post/toggle-comments', ({ postId, isDisabledComments }, { rejectWithValue, dispatch }) => {
  return API<IToggleCommentsById>({
    url: `http://localhost:5000/api/posts/toggle-comments`,
    method: 'PATCH',
    data: { postId, isDisabledComments },
  })
    .then(({ data }) => {
      return data;
    })
    .catch(({ response }: AxiosError<IError>) => {
      dispatch(
        showMessage({
          title: `У вас нет прав для ${
            isDisabledComments ? 'разблокировки' : 'блокировки'
          } комментариев`,
          type: 'warning',
          level: 'medium',
        })
      );

      return rejectWithValue(response?.data);
    });
});

export default toggleCommentsById;
