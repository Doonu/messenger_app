import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICommentsState } from '../../../entities/post/model/IPost';
import { IConfigAsyncThunk as IDefaultConfigAsyncThunk } from '../../models/errors';
import { RootState } from '../../../app/store';
import API from '../interceptors';
import { showMessage } from '../../../entities/notification/notification.slice';

interface IConfigAsyncThunk extends IDefaultConfigAsyncThunk {
  state: RootState;
}

const deleteComments = createAsyncThunk<ICommentsState, number, IConfigAsyncThunk>(
  'comments/deleteComment',
  (postId, { rejectWithValue, dispatch }) => {
    return API<ICommentsState>({
      url: `http://localhost:5000/api/posts/comments/${postId}`,
      method: 'DELETE',
    })
      .then(({ data }) => {
        return data;
      })
      .catch(({ response }) => {
        let message = 'Неудалось удалить пост';
        if (response?.status === 401) {
          message = 'У вас нет прав на удаления комментария';
        }

        dispatch(
          showMessage({
            title: message,
            type: 'warning',
            level: 'medium',
          })
        );

        return rejectWithValue(response.data);
      });
  }
);

export default deleteComments;
