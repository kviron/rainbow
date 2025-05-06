import { IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(8, { message: 'Пароль должен быть не менее 8 символов' })
  password: string;

  login: string;
}
