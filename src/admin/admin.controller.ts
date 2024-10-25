import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiTags('admin')
@ApiBearerAuth()

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: "Get all job listings posted by the admin" })
  @Get('jobs')
  async getAllJobs() {
    return this.adminService.getAllJobsPostedByAdmin();
  }

  @ApiOperation({ summary: "Get all applicants for a specific job" })
  @Get('jobs/:id/applicants')
  async getJobApplicants(@Param('id') jobId: string) {
    return this.adminService.getApplicantsForJob(jobId);
  }

  @ApiOperation({ summary: "Change the application status of an applicant" })
  @Patch('applications/:id/status')
  async updateApplicationStatus(
    @Param('id') applicationId: string,
    @Body('status') status: string,
  ) {
    return this.adminService.updateApplicationStatus(applicationId, status);
  }
}

