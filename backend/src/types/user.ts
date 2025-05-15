import { UserRole } from '../auth/role.enum';
import { UserStatus } from '../user/user.enums';
import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';
import { PropertyUserRole } from '../user/swager/propertyes';

export interface IUser {
  id: string;
  email: string;
  roles: UserRole[];
  status: UserStatus;
}

export class AuthLoginResponse {
  @ApiProperty({ example: 1, description: 'Id user' })
  id: string;

  @ApiProperty({ description: 'Email user' })
  email: string;

  @Column({
    type: 'set',
    enum: UserRole,
    default: [UserRole.User],
  })
  @ApiProperty(PropertyUserRole)
  roles: UserRole[];

  @ApiProperty({ description: 'Id user' })
  status: UserStatus;

  @ApiProperty({ description: 'accessToken' })
  accessToken: string;
}
