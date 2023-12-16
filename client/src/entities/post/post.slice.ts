import { createSlice } from '@reduxjs/toolkit';
import { postState } from './model/IPost';
import postCreate from '../../shared/api/post/postCreate';
import getAllPost from '../../shared/api/post/getAllPost';

interface postsState {
  posts: postState[];
  loaders: {
    addPost: boolean;
    getPost: boolean;
  };
}

const initialState: postsState = {
  posts: [],
  loaders: {
    addPost: false,
    getPost: false,
  },
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postCreate.fulfilled, (state, { payload }) => {
      state.posts.unshift(payload);
    });
    builder.addCase(getAllPost.fulfilled, (state, { payload }) => {
      state.posts = payload.reverse();
    });
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
