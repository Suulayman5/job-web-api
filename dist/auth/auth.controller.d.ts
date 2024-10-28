import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: LoginDto): Promise<{
        access_token: string;
    } | {
        message: string;
    }>;
    register(body: RegisterDto): Promise<{
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
    } | {
        message: string;
    }>;
    adminLogin(req: any): Promise<{
        access_token: string;
    }>;
}
