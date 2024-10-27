import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/service';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    validateAdmin(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    register(data: any): Promise<{
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
    }>;
}
