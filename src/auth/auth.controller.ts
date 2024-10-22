import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './admin-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      return { message: 'Invalid credentials' }; // Return error if credentials are wrong
    }
    return this.authService.login(user); // If valid, return JWT token
  }

  @Post('register')
  async register(@Body() body) {
    return this.authService.register(body); // Registers a new user
  }

  @UseGuards(LocalAuthGuard) // Use LocalAuthGuard for validating credentials
  @Post('admin/login')
  async adminLogin(@Req() req: any) {
    return this.authService.login(req.user); // Call login method to get token
  }
}




