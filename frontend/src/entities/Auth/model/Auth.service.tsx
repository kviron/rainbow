import { authLogin, authLogout } from '@/shared/generated';
import type { AuthServiceDto } from './Auth.types';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const';

class AuthServiceClass {
  login = async (body: AuthServiceDto['login']) => {
    const response = (await authLogin({ body })).data

    console.log(response);

    if (response) {
      localStorage.setItem(USER_LOCALSTORAGE_KEY, response.accessToken);
    }

    console.log(localStorage.getItem(USER_LOCALSTORAGE_KEY));

    return response;
  }

  logout = async () => {
    return await authLogout()
  }
}

export const AuthService = new AuthServiceClass();