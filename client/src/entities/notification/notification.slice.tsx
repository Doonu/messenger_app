import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INotification } from './model/INotification';

const initialState: INotification = {
  message: {
    title: '',
    type: undefined,
    level: undefined,
  },
};

export const notificationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    showMessage: (state, action: PayloadAction<INotification['message']>) => {
      state.message = action.payload;
    },
    clearMessage: (state) => {
      state.message = { type: undefined, level: undefined, title: '' };
    },
  },
});
export const { showMessage, clearMessage } = notificationSlice.actions;
export default notificationSlice.reducer;
