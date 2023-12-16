import { createAsyncThunk } from '@reduxjs/toolkit';
import { IConfigAsyncThunk as IDefaultConfigAsyncThunk } from '../../models/errors';
import { RootState } from '../../../app/store';
import API from '../interceptors';
import { ICommentsState } from '../../../entities/post/model/IPost';

interface ICreateComment {
  content: string;
  postId: number;
}

interface IConfigAsyncThunk extends IDefaultConfigAsyncThunk {
  state: RootState;
}

const createComment = createAsyncThunk<ICommentsState, ICreateComment, IConfigAsyncThunk>(
  'comments/createComment',
  ({ content, postId }, { rejectWithValue }) => {
    return API<ICommentsState>({
      url: `http://localhost:5000/api/posts/comments`,
      method: 'POST',
      data: { content, postId },
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

export default createComment;
