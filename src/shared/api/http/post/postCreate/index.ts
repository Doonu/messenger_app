import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '@shared/api';
import { IConfigAsyncThunk, IError } from '@shared/models';
import { AxiosError } from 'axios';
import { showMessage } from '@entities/notification';
import { IPostState, ApiPostState } from '@entities/post';

import { IPostCreate } from './postCreate.type';

export const postCreate = createAsyncThunk<IPostState, IPostCreate, IConfigAsyncThunk>(
  'posts/create',
  (post, { rejectWithValue, dispatch }) => {
    return API<ApiPostState>({
      url: `api/posts`,
      method: 'POST',
      data: post,
    })
      .then(({ data }) => {
        return {
          id: data.id,
          userId: data.userId,
          content: data.content,
          countLikes: data.countLikes,
          likesList: data.likesList,
          shared: data.shared,
          comments: 0,
          files: data.files,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          isDisabledComments: data.isDisabledComments,
          view: data.view,
          author: {
            name: data.author.name,
            imgSubstitute: data.author.imgSubstitute,
            id: data.author.id,
            statusConnected: data.author.statusConnected,
            timeConnected: data.author.timeConnected,
          },
        };
      })
      .catch(({ response }: AxiosError<IError>) => {
        dispatch(
          showMessage({
            title: `Неудалось создать пост`,
            type: 'warning',
            level: 'medium',
          })
        );
        return rejectWithValue(response?.data);
      });
  }
);
