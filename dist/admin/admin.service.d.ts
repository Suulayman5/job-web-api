import { PrismaService } from '../prisma/service';
export declare class AdminService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllJobsPostedByAdmin(): Promise<any>;
    getApplicantsForJob(jobId: string): Promise<({
        user: {
            id: string;
            name: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
            resumeUrl: string | null;
            profilePicture: string | null;
            workExperience: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        userId: string;
        jobId: string;
        resume: string;
        status: string;
    })[]>;
    updateApplicationStatus(applicationId: string, status: string): Promise<{
        id: string;
        userId: string;
        jobId: string;
        resume: string;
        status: string;
    }>;
}
