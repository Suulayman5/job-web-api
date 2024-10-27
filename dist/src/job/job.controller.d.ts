import { JobService } from './job.service';
import { JobListing } from '@prisma/client';
export declare class JobController {
    private readonly jobService;
    constructor(jobService: JobService);
    createJob(jobData: JobListing): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        title: string;
        companyName: string;
        location: string;
        jobType: string;
        salaryRange: string | null;
        applicationDeadline: Date;
    }>;
    getAllJobs(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        title: string;
        companyName: string;
        location: string;
        jobType: string;
        salaryRange: string | null;
        applicationDeadline: Date;
    }[]>;
    getJobById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        title: string;
        companyName: string;
        location: string;
        jobType: string;
        salaryRange: string | null;
        applicationDeadline: Date;
    }>;
    updateJob(id: string, jobData: Partial<JobListing>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        title: string;
        companyName: string;
        location: string;
        jobType: string;
        salaryRange: string | null;
        applicationDeadline: Date;
    }>;
    deleteJob(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        title: string;
        companyName: string;
        location: string;
        jobType: string;
        salaryRange: string | null;
        applicationDeadline: Date;
    }>;
    applyForJob(jobId: string, userId: string, resume: string): Promise<{
        id: string;
        userId: string;
        jobId: string;
        resume: string;
        status: string;
    }>;
}
