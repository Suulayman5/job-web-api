// src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module'; // Import PrismaModule
import { AuthModule } from './auth/auth.module';
import { JobModule } from './job/job.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    PrismaModule, // Include PrismaModule
    AuthModule,
    JobModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


