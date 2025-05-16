import { Injectable } from '@nestjs/common';
import { CreateBranchDto } from './dto/branch.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class BranchService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: CreateBranchDto) {
    const branch = await this.prismaService.branch.create({ data: dto });
    return branch;
  }
}
