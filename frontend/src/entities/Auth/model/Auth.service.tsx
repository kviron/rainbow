import { authLogin, authLogout } from '@/shared/generated';
import type { AuthServiceDto } from './Auth.types';

class AuthServiceClass {
  login = async (body: AuthServiceDto['login']) => {
    return await authLogin({ body })
  }

  logout = async () => {
    return await authLogout()
  }
}

export const AuthService = new AuthServiceClass();