import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from 'prisma/service';
import { AuthModule } from './auth/auth.module';
import { JobModule } from './job/job.module';

@Module({
  imports: [AuthModule, JobModule],
  controllers: [AppController],
  providers: [PrismaService,AppService],
  exports: [PrismaService],
 
})
export class AppModule {}
