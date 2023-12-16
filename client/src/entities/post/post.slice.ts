import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPostState } from './model/IPost';
import postCreate from '../../shared/api/post/postCreate';
import getAllPost from '../../shared/api/post/getAllPost';
import deletePostById from '../../shared/api/post/deletePostById';
import restorePostById from '../../shared/api/post/restorePostById';
import toggleCommentsById from '../../shared/api/post/toggleCommentsById';
import { ILikePost, IToggleCommentsById } from '../../shared/models/IPost';
import likePost from '../../shared/api/post/likePost';

//TODO: Обработка ошибок и загрузки

interface postsState {
  posts: IPostState[];
  deletedPost: IPostState[];
  loaders: {
    addPost: boolean;
    getPost: boolean;
  };
}

const initialState: postsState = {
  posts: [],
  deletedPost: [],
  loaders: {
    addPost: false,
    getPost: false,
  },
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    deletePost: (state, { payload }: PayloadAction<number>) => {
      state.posts = state.posts.filter((post) => post.id !== payload);
    },
    setAllPosts: (state, { payload }: PayloadAction<IPostState[]>) => {
      state.posts = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postCreate.fulfilled, (state, { payload }) => {
      state.posts.unshift(payload);
    });
    builder.addCase(getAllPost.fulfilled, (state, { payload }) => {
      state.posts = payload.reverse();
    });
    builder.addCase(deletePostById.fulfilled, (state, { payload }) => {
      state.deletedPost = [...state.deletedPost, payload];
    });
    builder.addCase(restorePostById.fulfilled, (state, { payload }) => {
      state.deletedPost = state.deletedPost.filter((post) => post.id !== payload);
    });
    builder.addCase(likePost.fulfilled, (state, { payload }: PayloadAction<ILikePost>) => {
      state.posts = state.posts.map((post) => {
        if (post.id === payload.postId) {
          if (payload.isLike) {
            return {
              ...post,
              countLikes: post.countLikes + 1,
            };
          } else {
            return {
              ...post,
              countLikes: post.countLikes - 1,
            };
          }
        }
        return post;
      });
    });
    builder.addCase(
      toggleCommentsById.fulfilled,
      (state, { payload }: PayloadAction<IToggleCommentsById>) => {
        state.posts = state.posts.map((post) => {
          if (post.id == payload.postId) {
            return {
              ...post,
              isDisabledComments: !post.isDisabledComments,
            };
          }
          return post;
        });
      }
    );
  },
});

export const { deletePost, setAllPosts } = postSlice.actions;
export default postSlice.reducer;
