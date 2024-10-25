import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { LocalAuthGuard } from './admin-auth.guard';

@ApiTags('auth') // Group the routes under 'auth' in Swagger
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'User login' }) // Add description for login endpoint
  @ApiBody({ schema: { example: { email: 'user@example.com', password: 'password123' } } }) // Define request body example
  @Post('login')
  async login(@Body() body) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      return { message: 'Invalid credentials' }; // Return error if credentials are wrong
    }
    return this.authService.login(user); // If valid, return JWT token
  }

  @ApiOperation({ summary: 'User registration' }) // Add description for register endpoint
  @ApiBody({ schema: { example: { email: 'user@example.com', password: 'password123', name: 'John Doe' } } }) // Define request body example
  @Post('register')
async register(@Body() body) {
  try {
    return await this.authService.register(body); // Try registering the user
  } catch (error) {
    return { message: error.message }; // Catch and return the error message if email is taken
  }
}


  @ApiOperation({ summary: 'Admin login' }) // Add description for admin login endpoint
  @ApiBearerAuth() // Add bearer auth (JWT) to this route
  @UseGuards(LocalAuthGuard) // Use LocalAuthGuard for validating credentials
  @Post('admin/login')
  async adminLogin(@Req() req: any) {
    return this.authService.login(req.user); // Call login method to get token
  }
}





