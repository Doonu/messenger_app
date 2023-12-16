export interface IError {
  ErrorID: string;
  message?: string;
}

export interface IConfigAsyncThunk {
  rejectValue?: IError;
}
