import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/service'; // Prisma service for database access
import { JobListing } from '@prisma/client'; // Prisma-generated JobListing type

@Injectable()
export class JobService {
  constructor(private prisma: PrismaService) {}

  // Create a new job listing
  async createJob(data: JobListing): Promise<JobListing> {
    return this.prisma.jobListing.create({
      data,
    });
  }

  // Get all job listings
  async getAllJobs(): Promise<JobListing[]> {
    return this.prisma.jobListing.findMany();
  }

  // Get a single job by its ID
  async getJobById(id: string): Promise<JobListing> {
    return this.prisma.jobListing.findUnique({
      where: { id },
    });
  }

  // Update a job listing
  async updateJob(id: string, data: Partial<JobListing>): Promise<JobListing> {
    return this.prisma.jobListing.update({
      where: { id },
      data,
    });
  }

  // Delete a job listing
  async deleteJob(id: string): Promise<JobListing> {
    return this.prisma.jobListing.delete({
      where: { id },
    });
  }
  
  async applyForJob(jobId: string, userId: string, resume: string) {
    return this.prisma.application.create({
      data: {
        jobId,
        userId,
        resume,
      },
    });
  }
}

