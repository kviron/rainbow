import { UserRole } from '../../auth/role.enum';

export const PropertyUserRole = {
  example: [UserRole.User],
  description: 'Роли пользователя',
  enum: UserRole,
  enumName: 'UserRole',
  type: () => [UserRole],
  isArray: true,
};
