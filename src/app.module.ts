import { Module } from '@nestjs/common';
import { BranchModule } from './branch/branch.module';
import { SkuModule } from './sku/sku.module';
import { CategoryModule } from './category/category.module';
import { SubcategoryModule } from './subcategory/subcategory.module';
import { PrismaService } from 'prisma/prisma.service';
import { BarcodeModule } from './barcode/barcode.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    BranchModule,
    SkuModule,
    CategoryModule,
    SubcategoryModule,
    BarcodeModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
