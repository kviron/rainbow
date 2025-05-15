import { userCreate, userFindOne, userGetCurrent, userRemove, userUpdate } from '@/shared/generated';
import type { UserServiceDTO } from './user.types.ts';

class UserServiceClass {
  create = async (data: UserServiceDTO['create']) => {
    return await userCreate({
      body: data,
    })
  }

  current = async () => {
    return (await userGetCurrent())?.data
  }

  findOne = async (data: UserServiceDTO['findOne']) => {
    return (await userFindOne({
      path: data,
    })).data
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
        id: data.id
      }
    })
  }
}

export const UserService = new UserServiceClass();