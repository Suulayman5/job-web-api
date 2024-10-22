import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/service'; // Prisma service for database access
import { Job } from '@prisma/client'; // Prisma-generated Job type

@Injectable()
export class JobService {
  constructor(private prisma: PrismaService) {}

  // Create a new job listing
  async createJob(data: Job): Promise<Job> {
    return this.prisma.job.create({
      data,
    });
  }

  // Get all job listings
  async getAllJobs(): Promise<Job[]> {
    return this.prisma.job.findMany();
  }

  // Get a single job by its ID
  async getJobById(id: string): Promise<Job> {
    return this.prisma.job.findUnique({
      where: { id },
    });
  }

  // Update a job listing
  async updateJob(id: string, data: Partial<Job>): Promise<Job> {
    return this.prisma.job.update({
      where: { id },
      data,
    });
  }

  // Delete a job listing
  async deleteJob(id: string): Promise<Job> {
    return this.prisma.job.delete({
      where: { id },
    });
  }
}
