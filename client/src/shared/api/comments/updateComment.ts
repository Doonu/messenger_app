import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICommentsState } from '../../../entities/post/model/IPost';
import { IConfigAsyncThunk as IDefaultConfigAsyncThunk } from '../../models/errors';
import { RootState } from '../../../app/store';
import API from '../interceptors';

interface IUpdateComment {
  content: string;
  commentId: number;
}

interface IConfigAsyncThunk extends IDefaultConfigAsyncThunk {
  state: RootState;
}

const updateComment = createAsyncThunk<ICommentsState, IUpdateComment, IConfigAsyncThunk>(
  'comments/updateComment',
  ({ content, commentId }, { rejectWithValue }) => {
    return API<ICommentsState>({
      url: `http://localhost:5000/api/posts/comments`,
      method: 'PUT',
      data: { commentId, content },
    })
      .then(({ data }) => {
        return {
          ...data,
          isEdit: false,
        };
      })
      .catch(({ response }) => {
        return rejectWithValue(response?.data);
      });
  }
);

export default updateComment;
