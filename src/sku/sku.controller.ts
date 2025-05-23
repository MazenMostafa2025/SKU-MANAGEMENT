import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreateSkuDto } from './dto/CreateSkuDto';
import { SkuService } from './sku.service';
import { QuerySkuDto } from './dto/QuerySkuDto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('SKU')
@Controller('sku')
export class SkuController {
  constructor(private readonly service: SkuService) {}

  @ApiOperation({ summary: 'Create a new SKU' })
  @ApiResponse({
    status: 201,
    description: 'The SKU has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @Post('create')
  create(@Body() dto: CreateSkuDto) {
    return this.service.create(dto);
  }

  @ApiOperation({ summary: 'Search SKUs' })
  @ApiResponse({
    status: 200,
    description: 'Return the list of SKUs matching the search criteria.',
  })
  @Get('search')
  search(@Query() query: QuerySkuDto) {
    return this.service.search(query);
  }
  @ApiOperation({ summary: 'Deactivate SKU' })
  @ApiResponse({
    status: 200,
    description: 'The SKU has been successfully deactivated.',
  })
  @Delete('deactivate/:id')
  deactivate(@Param('id') id: string) {
    return this.service.deactivate(id);
  }
}
