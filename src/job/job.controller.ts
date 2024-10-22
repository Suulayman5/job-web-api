import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { JobService } from './job.service';
import { Job } from '@prisma/client';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post()
  createJob(@Body() jobData: Job) {
    return this.jobService.createJob(jobData);
  }

  @Get()
  getAllJobs() {
    return this.jobService.getAllJobs();
  }

  @Get(':id')
  getJobById(@Param('id') id: string) {
    return this.jobService.getJobById(id);
  }

  @Put(':id')
  updateJob(@Param('id') id: string, @Body() jobData: Partial<Job>) {
    return this.jobService.updateJob(id, jobData);
  }

  @Delete(':id')
  deleteJob(@Param('id') id: string) {
    return this.jobService.deleteJob(id);
  }
}
