import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/service';
import { JobListing, Application } from '@prisma/client';

@Injectable()
export class JobService {
  constructor(private prisma: PrismaService) {}

  async createJob(data: JobListing): Promise<JobListing> {
    return this.prisma.jobListing.create({
      data,
    });
  }

  async getAllJobs(): Promise<JobListing[]> {
    return this.prisma.jobListing.findMany();
  }

  async getJobById(id: string): Promise<JobListing> {
    const job = await this.prisma.jobListing.findUnique({
      where: { id },
    });
    if (!job) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }
    return job;
  }

  async updateJob(id: string, data: Partial<JobListing>): Promise<JobListing> {
    const job = await this.prisma.jobListing.findUnique({ where: { id } });
    if (!job) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }
    return this.prisma.jobListing.update({
      where: { id },
      data,
    });
  }

  async deleteJob(id: string): Promise<JobListing> {
    const job = await this.prisma.jobListing.findUnique({ where: { id } });
    if (!job) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }
    return this.prisma.jobListing.delete({
      where: { id },
    });
  }

  async applyForJob(jobId: string, userId: string, resume: string): Promise<Application> {
    return this.prisma.application.create({
      data: {
        jobId,
        userId,
        resume,
      },
    });
  }
}


