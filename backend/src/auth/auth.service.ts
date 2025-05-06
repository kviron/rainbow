import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { IUser } from '../types/user';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.userService.findByEmail(email);

    if (!user) throw new UnauthorizedException('Неправильный логин или пароль');

    const isMatch = await bcrypt.compare(pass, user.password);

    if (isMatch) {
      const { password, ...result } = user;
      return result;
    }

    throw new UnauthorizedException('Неправильный логин или пароль');
  }

  async login(user: IUser) {
    const payload = { email: user.email, id: user.id };
    return {
      id: payload.id,
      email: payload.email,
      access_token: this.jwtService.sign(payload),
    };
  }
}
