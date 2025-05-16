import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateSkuDto } from './dto/CreateSkuDto';
import { SkuService } from './sku.service';
import { QuerySkuDto } from './dto/QuerySkuDto';

@Controller('sku')
export class SkuController {
  constructor(private readonly service: SkuService) {}
  @Post('create')
  create(@Body() dto: CreateSkuDto) {
    return this.service.create(dto);
  }
  @Get('search')
  search(@Query() query: QuerySkuDto) {
    return this.service.search(query);
  }
}
