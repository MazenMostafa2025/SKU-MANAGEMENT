// branches/branch.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBranchDto {
  @ApiProperty({ description: 'Branch name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Branch location' })
  @IsNotEmpty()
  @IsString()
  location: string;

  @ApiProperty({ description: 'Branch contact information' })
  @IsNotEmpty()
  @IsString()
  contact: string;
}
