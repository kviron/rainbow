import { userCreate, userRemove, userUpdate } from '@/client';
import type { UserServiceDTO } from './user.types.ts';

export class UserService {
  create = async (data: UserServiceDTO['create']) => {
    return await userCreate({
      body: data,
    })
  }

  update = async (id: string, data: UserServiceDTO['update']) => {
    return await userUpdate({
      path: {
        id,
      },
      body: data,
    })
  }

  remove = async (data: UserServiceDTO['remove']) => {
    return await userRemove({
      path: {
        id: data
      }
    })
  }
}