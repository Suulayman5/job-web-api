"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobService = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("../../prisma/service");
let JobService = class JobService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createJob(data) {
        return this.prisma.jobListing.create({
            data,
        });
    }
    async getAllJobs() {
        return this.prisma.jobListing.findMany();
    }
    async getJobById(id) {
        const job = await this.prisma.jobListing.findUnique({
            where: { id },
        });
        if (!job) {
            throw new common_1.NotFoundException(`Job with ID ${id} not found`);
        }
        return job;
    }
    async updateJob(id, data) {
        const job = await this.prisma.jobListing.findUnique({ where: { id } });
        if (!job) {
            throw new common_1.NotFoundException(`Job with ID ${id} not found`);
        }
        return this.prisma.jobListing.update({
            where: { id },
            data,
        });
    }
    async deleteJob(id) {
        const job = await this.prisma.jobListing.findUnique({ where: { id } });
        if (!job) {
            throw new common_1.NotFoundException(`Job with ID ${id} not found`);
        }
        return this.prisma.jobListing.delete({
            where: { id },
        });
    }
    async applyForJob(jobId, userId, resume) {
        return this.prisma.application.create({
            data: {
                jobId,
                userId,
                resume,
            },
        });
    }
};
exports.JobService = JobService;
exports.JobService = JobService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [service_1.PrismaService])
], JobService);
//# sourceMappingURL=job.service.js.map