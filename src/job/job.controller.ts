import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { JobService } from './job.service';
import { JobListing } from '@prisma/client';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post()
  createJob(@Body() jobData: JobListing) {
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
  updateJob(@Param('id') id: string, @Body() jobData: Partial<JobListing>) {
    return this.jobService.updateJob(id, jobData);
  }

  @Delete(':id')
  deleteJob(@Param('id') id: string) {
    return this.jobService.deleteJob(id);
  }


  @Post(':id/apply')
  async applyForJob(
    @Param('id') jobId: string,
    @Body('userId') userId: string,
    @Body('resume') resume: string,
  ) {
    return this.jobService.applyForJob(jobId, userId, resume);
  }
}
