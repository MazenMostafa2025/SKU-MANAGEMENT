import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSkuDto {
  @ApiProperty({ description: 'SKU Name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'SKU Code' })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({ description: 'SKU Description' })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({ description: 'SKU Price' })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ description: 'SKU Stock' })
  @IsNumber()
  @IsNotEmpty()
  stock: number;

  @ApiProperty({ description: 'SKU Category ID' })
  @IsNumber()
  @IsNotEmpty()
  categoryId: string;

  @ApiProperty({ description: 'SKU Subcategory ID' })
  @IsNumber()
  @IsNotEmpty()
  subcategoryId: string;

  @ApiProperty({ description: 'SKU Brand ID' })
  @IsNumber()
  @IsNotEmpty()
  brandId: string;

  @ApiProperty({ description: 'SKU Branch' })
  @IsNumber()
  @IsNotEmpty()
  branchId: string;

  createdAt?: Date;
  updatedAt?: Date;
}
