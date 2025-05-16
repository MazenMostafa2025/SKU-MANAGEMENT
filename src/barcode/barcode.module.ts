import { Module } from '@nestjs/common';
import { BarcodeController } from './barcode.controller';
import { BarcodeService } from './barcode.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [BarcodeController],
  providers: [BarcodeService, PrismaService],
})
export class BarcodeModule {}
