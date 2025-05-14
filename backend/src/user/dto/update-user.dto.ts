import { CreateUserDto } from './create-user.dto';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { UserStatus } from '../user.enums';
import { UserRole } from '../../auth/role.enum';
import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    example: UserStatus.Active,
    type: 'string',
    enum: UserStatus,
    enumName: 'UserStatus',
  })
  status: UserStatus;

  @IsNotEmpty()
  @ApiProperty({
    example: UserRole.Admin,
    enum: UserRole,
    enumName: 'UserRole',
    isArray: true,
  })
  roles: UserRole[];
}
