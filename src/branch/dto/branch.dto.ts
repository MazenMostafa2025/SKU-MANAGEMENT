// branches/branch.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBranchDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  contact: string;
}
