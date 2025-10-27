import { environment } from 'src/environments/environment';

export const baseUrl = environment.apiBaseUrl;
const AUTH_BASE = baseUrl + 'auth/';

export const auth = {
  USERS_REGISTER: AUTH_BASE + 'register',
  USERS_LOGIN: AUTH_BASE + 'login',
};
