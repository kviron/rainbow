import { UserRole } from '../auth/role.enum';
import { UserStatus } from '../user/user.enums';

export interface IUser {
  id: string;
  email: string;
  roles: UserRole[];
  status: UserStatus;
}
