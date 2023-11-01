import { RootState } from '../../app/store';

export const isAuthSelector = (state: RootState) => state.authSlice.isAuth;
