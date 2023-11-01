import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const API: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

const handlerRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const { method, url, headers } = config;

  const session = localStorage.getItem('session');

  if (session) headers.Authorization = JSON.parse(session).at;

  console.log(`🚀 [API] ${method?.toUpperCase()} ${url} | Request`);

  return config;
};

const handlerResponse = (response: AxiosResponse): AxiosResponse => {
  const { method, url } = response.config;
  const { status } = response;
  console.log(`🚀 [API] ${method?.toUpperCase()} ${url} | Response ${status}`);

  return response;
};

const handlerError = (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    const { message } = error;
    const { method, url } = error.config as AxiosRequestConfig;
    const { status } = (error.response as AxiosResponse) ?? {};

    console.log(`🚨 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${message}`);
  } else {
    console.log(`🚨 [API] | Error ${error.message}`);
  }

  return Promise.reject(error);
};

API.interceptors.request.use(handlerRequest, handlerError);
API.interceptors.response.use(handlerResponse, handlerError);

export default API;
