import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { EntityBase } from "../../utils";
import { ApiProperty } from "@nestjs/swagger";
import { UserRole } from "../../auth/role.enum";
import { UserStatus } from "../user.enums";
import { PropertyUserRole } from "../swager/propertyes";

@Entity()
export class User extends EntityBase {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: "Id user" })
  id: number;

  @Column({ unique: true })
  @ApiProperty({
    example: "test@test.ru",
    description: "Почта пользователя",
    type: "string",
  })
  email: string;

  @Column()
  password: string;

  @Column({
    type: "set",
    enum: UserRole,
    default: [UserRole.User],
  })
  @ApiProperty(PropertyUserRole)
  roles: UserRole[];

  @Column({
    type: "set",
    enum: UserStatus,
    default: [UserStatus.Active],
  })
  @ApiProperty({
    example: UserStatus.Active,
    description: "Статус пользователя",
    enum: UserStatus,
    enumName: "UserStatus",
    type: () => UserStatus,
  })
  status: UserStatus;
}
