import { IsEmail, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty({ example: 'test@test.ru', type: 'string' })
  email: string;

  @MinLength(8, { message: 'Пароль должен быть не менее 8 символов' })
  @ApiProperty({
    example: 'ge@#dgvd83Fsd',
    description: 'Пароль не менее 8 символов',
  })
  password: string;
}
