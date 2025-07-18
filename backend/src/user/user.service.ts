import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserRole } from '../auth/role.enum';
import { Request } from 'express';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const existsUser = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });

    if (existsUser)
      throw new BadRequestException('Пользователь с таким email существует');

    const hash = await bcrypt.hash(createUserDto.password, 10);

    const user = await this.userRepository.save({
      ...createUserDto,
      password: hash,
      roles: [UserRole.User],
    });

    const token = this.jwtService.sign({
      email: createUserDto.email,
    });

    return { user, token };
  }

  async getCurrentUser(req: Request) {
    // @ts-ignore
    const userId: number = req.user?.id;

    const currentUser = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (currentUser) return currentUser;

    throw new BadRequestException('Пользователь не найден');
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({
      where: { id },
    });
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOne({
      where: { email },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
