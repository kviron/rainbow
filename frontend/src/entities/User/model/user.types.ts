import type { CreateUserDto, UpdateUserDto, User as UserApi } from '@/client';

export type User = UserApi

export type UserServiceDTO = {
  create: CreateUserDto
  update: UpdateUserDto
  remove: string
}