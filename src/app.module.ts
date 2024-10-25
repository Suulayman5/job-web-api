import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from 'prisma/service';
import { AuthModule } from './auth/auth.module';
import { JobModule } from './job/job.module';
import { AdminModule } from './admin/admin.module';
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}

@Module({
  imports: [AuthModule, JobModule, AdminModule],
  controllers: [AppController],
  providers: [PrismaService, AppService],
  exports: [PrismaService],
})
export class AppModule {}

