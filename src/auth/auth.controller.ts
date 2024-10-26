import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { LocalAuthGuard } from './admin-auth.guard';
import { RegisterDto, LoginDto } from './auth.dto';

@ApiTags('auth') 
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'User login' }) 
  @ApiBody({ schema: { example: { email: 'user@example.com', password: 'password123' } } })
  @Post('login')
  async login(@Body() body: LoginDto) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    return this.authService.login(user); 
  }

  @ApiOperation({ summary: 'User registration' })
  @ApiBody({ schema: { example: { email: 'user@example.com', password: 'password123', name: 'John Doe' } } })
  @Post('register')
async register(@Body() body: RegisterDto) {
  try {
    return await this.authService.register(body); 
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message };
    }
    return { message: 'An unknown error occurred' };
  }
  
}


  @ApiOperation({ summary: 'Admin login' })
  @ApiBearerAuth()
  @UseGuards(LocalAuthGuard)
  @Post('admin/login')
  async adminLogin(@Req() req: any) {
    return this.authService.login(req.user); // Call login method to get token
  }
}





