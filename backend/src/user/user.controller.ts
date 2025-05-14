import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiBearerAuth('user')
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create user', operationId: 'user-create' })
  @ApiResponse({ status: 201, description: 'Успешно создан', type: User })
  @ApiBody({ type: CreateUserDto })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('/current')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ operationId: 'user-get-current' })
  @ApiResponse({
    status: 200,
    description: 'Получить данные текущего пользователя',
  })
  getCurrentUser(@Req() req: Request) {
    return this.userService.getCurrentUser(req);
  }

  @Get(':id')
  @ApiOperation({ operationId: 'user-get' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: User,
  })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ operationId: 'user-update' })
  @ApiResponse({
    status: 200,
    description: 'Обновление пользователя',
    type: User,
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ operationId: 'user-remove' })
  @ApiResponse({
    status: 200,
    description: 'Удаление пользователя',
    type: User,
  })
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
