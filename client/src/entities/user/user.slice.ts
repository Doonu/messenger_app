import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import getProfile from '../../shared/api/user/getProfile';

//TODO: Соединить модельки из слайса и апи

export interface authState {
  name: string;
  id: string;
  email: string;
  banned: boolean;
  banReason: null | string;
  roles: {
    value: string;
    createdAt: string;
  }[];
  avatar: string;
}

const initialState: authState = {
  name: '',
  email: '',
  id: '',
  banned: false,
  banReason: null,
  roles: [],
  avatar: '',
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, { payload }: PayloadAction<authState>) => {
      state.name = payload.name;
      state.email = payload.email;
      state.banReason = payload.banReason;
      state.banned = payload.banned;
      state.roles = payload.roles;
      state.id = payload.id;
      state.avatar = payload.avatar;
    });
  },
});

export default userSlice.reducer;
