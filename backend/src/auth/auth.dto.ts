import { ApiProperty, ApiSchema } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@ApiSchema({ name: 'AuthLoginRequest' })
export class AuthLoginDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    example: 'test@test.ru',
    description: 'Email пользователя',
  })
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({
    description: 'Пароль пользователя',
  })
  password: string;
}
