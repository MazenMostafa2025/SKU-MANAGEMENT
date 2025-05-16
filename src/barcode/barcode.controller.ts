import { Controller, Get, Param, Query } from '@nestjs/common';
import { BarcodeService } from './barcode.service';

@Controller('barcode')
export class BarcodeController {
  constructor(private readonly service: BarcodeService) {}
  @Get('generate/:skuCode')
  async generateBarcode(@Param('skuCode') skuCode: string) {
    const qr = await this.service.generateQrCode(skuCode);
    return { qr };
  }
}
