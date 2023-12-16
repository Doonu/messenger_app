import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILikeComments } from '../../models/IPost';
import { IConfigAsyncThunk as IDefaultConfigAsyncThunk } from '../../models/errors';
import { RootState } from '../../../app/store';
import API from '../interceptors';

interface IConfigAsyncThunk extends IDefaultConfigAsyncThunk {
  state: RootState;
}

const likeComments = createAsyncThunk<ILikeComments, number, IConfigAsyncThunk>(
  'comments/like',
  (commentId, _) => {
    return API<ILikeComments>({
      url: `http://localhost:5000/api/posts/comments/like`,
      method: 'PATCH',
      data: { commentId: commentId },
    }).then(({ data }) => {
      return data;
    });
  }
);

export default likeComments;
