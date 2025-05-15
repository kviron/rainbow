import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthLoginResponse, IUser } from '../types/user';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthLoginDto } from './auth.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'Create user', operationId: 'auth-login' })
  @ApiResponse({ status: 200, type: AuthLoginResponse })
  @ApiBody({ type: AuthLoginDto })
  async login(@Request() req: { user: IUser }) {
    return await this.authService.login(req.user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('logout')
  @ApiOperation({ summary: 'logout user', operationId: 'auth-logout' })
  async logout(@Request() req) {
    return req.logout();
  }
}
