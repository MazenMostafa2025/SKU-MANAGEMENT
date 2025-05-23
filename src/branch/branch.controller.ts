import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateBranchDto } from './dto/branch.dto';
import { BranchService } from './branch.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Branch')
@Controller('branch')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @ApiOperation({ summary: 'Create a new branch' })
  @ApiResponse({
    status: 201,
    description: 'The branch has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @Post()
  async createBranch(@Body() dto: CreateBranchDto) {
    const branch = await this.branchService.create(dto);
    return branch;
  }
}
