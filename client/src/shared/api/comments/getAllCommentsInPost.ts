import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICommentsState } from '../../../entities/post/model/IPost';
import { IConfigAsyncThunk as IDefaultConfigAsyncThunk } from '../../models/errors';
import { RootState } from '../../../app/store';
import API from '../interceptors';

interface IConfigAsyncThunk extends IDefaultConfigAsyncThunk {
  state: RootState;
}

const getAllCommentsInPost = createAsyncThunk<ICommentsState[], number, IConfigAsyncThunk>(
  'comments/getAll',
  (id, { rejectWithValue }) => {
    return API<ICommentsState[]>({
      url: `http://localhost:5000/api/posts/comments/${id}`,
      method: 'GET',
    })
      .then(({ data }) => {
        return data;
      })
      .catch(({ response }) => {
        return rejectWithValue(response?.data);
      });
  }
);

export default getAllCommentsInPost;
