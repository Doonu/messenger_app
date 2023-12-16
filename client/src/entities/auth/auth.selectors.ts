import { RootState } from '../../app/store';

export const isAuthSelector = (state: RootState) => state.authSlice.isAuth;
export const AcToSelector = (state: RootState) => state.authSlice.accessToken;
