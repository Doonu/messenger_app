export interface IPostLogin {
  id: number;
  token: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ApiLogin {
  token: string;
  id: number;
}
