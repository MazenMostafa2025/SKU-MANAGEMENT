import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateBranchDto } from './dto/branch.dto';
import { BranchService } from './branch.service';

@Controller('branch')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}
  @Post()
  async createBranch(@Body() dto: CreateBranchDto) {
    const branch = await this.branchService.create(dto);
    return branch;
  }
}
