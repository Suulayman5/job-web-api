import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/service';
import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user; // Exclude password from the result
      return result;
    }
    return null;
  }

  async validateAdmin(email: string, password: string): Promise<any> {
    const user = await this.validateUser(email, password);
    if (user && user.role === Role.ADMIN) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(data: any) {
    // Check if the email is already in use
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new Error('Email is already in use');
    }

    // Hash password before saving
    const hashedPassword = bcrypt.hashSync(data.password, 10);

    return this.prisma.user.create({
      data: { ...data, password: hashedPassword, role: 'USER' },
    });
  }
}

