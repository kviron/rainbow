import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { EntityBase } from '../../utils';
import { Certificate } from '../../certificate/entities/certificate.entity';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../../auth/role.enum';
import { UserStatus } from '../user.enums';

@Entity()
export class User extends EntityBase {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'Id user' })
  id: number;

  @Column({ unique: true })
  @ApiProperty({
    example: 'test@test.ru',
    description: 'Почта пользователя',
    type: 'string',
  })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Certificate, (certificate) => certificate.userCreate, {
    onDelete: 'SET NULL',
  })
  @ApiProperty({
    description: 'Массив сертификатов',
    type: 'array',
  })
  certificates: Certificate[];

  @Column({
    type: 'set',
    enum: UserRole,
    default: [UserRole.User],
  })
  @ApiProperty({
    example: [UserRole.User],
    description: 'Роли пользователя',
    enum: UserRole,
    enumName: 'UserRole',
    type: () => [UserRole],
    isArray: true,
  })
  roles: UserRole[];

  @Column({
    type: 'set',
    enum: UserStatus,
    default: [UserStatus.Active],
  })
  @ApiProperty({
    example: UserStatus.Active,
    description: 'Статус пользователя',
    enum: UserStatus,
    enumName: 'UserStatus',
    type: () => UserStatus,
  })
  status: UserStatus;
}
