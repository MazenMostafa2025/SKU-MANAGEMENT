import { Controller, Get, Param, Query } from '@nestjs/common';
import { BarcodeService } from './barcode.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('Barcode')
@Controller('barcode')
export class BarcodeController {
  constructor(private readonly service: BarcodeService) {}

  @ApiOperation({ summary: 'Generate QR code for a SKU' })
  @ApiParam({ name: 'skuCode', description: 'The SKU code to generate QR for' })
  @ApiResponse({ status: 200, description: 'Returns the QR code data URL.' })
  @ApiResponse({ status: 404, description: 'SKU not found.' })
  @Get('generate/:skuCode')
  async generateBarcode(@Param('skuCode') skuCode: string) {
    const qr = await this.service.generateQrCode(skuCode);
    return { qr };
  }
}
