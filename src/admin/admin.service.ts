import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/service';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllJobsPostedByAdmin() {
    // Fetch jobs where the current user is the admin who posted them
    return this.prisma.job.findMany({ where: { Role: 'ADMIN' } });
  }

  async getApplicantsForJob(jobId: string) {
    // Fetch job applications with applicant details
    return this.prisma.application.findMany({
      where: { jobId },
      include: { user: true },
    });
  }

  async updateApplicationStatus(applicationId: string, status: string) {
    // Update application status to 'rejected' or 'accepted'
    return this.prisma.application.update({
      where: { id: applicationId },
      data: { status },
    });
  }
}

