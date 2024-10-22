import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { JobController } from './job.controller';
import { PrismaService } from 'prisma/service'; // Assuming you have a PrismaService for database access

@Module({
  providers: [JobService, PrismaService],
  controllers: [JobController],
})
export class JobModule {}
