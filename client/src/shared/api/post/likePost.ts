import { createAsyncThunk } from '@reduxjs/toolkit';
import { IConfigAsyncThunk as IDefaultConfigAsyncThunk } from '../../models/errors';
import { RootState } from '../../../app/store';
import API from '../interceptors';
import { ILikePost } from '../../models/IPost';

interface IConfigAsyncThunk extends IDefaultConfigAsyncThunk {
  state: RootState;
}

const likePost = createAsyncThunk<ILikePost, number, IConfigAsyncThunk>(
  'post/like',
  (postId, _) => {
    return API<ILikePost>({
      url: `http://localhost:5000/api/posts/like`,
      method: 'PATCH',
      data: { postId: postId },
    }).then(({ data }) => {
      return data;
    });
  }
);

export default likePost;
