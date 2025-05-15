import type { CreateUserDto, UpdateUserDto, User as UserApi } from '@/shared/generated';

export { UserRole } from '@/shared/generated'

export type User = UserApi

export type UserServiceDTO = {
  create: CreateUserDto
  update: UpdateUserDto
  getCurrent: null,
  findOne: {
    id: string
  }
  remove: {
    id: string
  }
}