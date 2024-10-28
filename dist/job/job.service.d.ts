import { PrismaService } from '../prisma/service';
import { JobListing, Application } from '@prisma/client';
export declare class JobService {
    private prisma;
    constructor(prisma: PrismaService);
    createJob(data: JobListing): Promise<JobListing>;
    getAllJobs(): Promise<JobListing[]>;
    getJobById(id: string): Promise<JobListing>;
    updateJob(id: string, data: Partial<JobListing>): Promise<JobListing>;
    deleteJob(id: string): Promise<JobListing>;
    applyForJob(jobId: string, userId: string, resume: string): Promise<Application>;
}
