import { Injectable } from '@nestjs/common';
import { CreateSkuDto } from './dto/CreateSkuDto';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SkuService {
  constructor(private readonly prisma: PrismaService) {}
  create(dto: CreateSkuDto) {
    return this.prisma.sku.create({ data: dto });
  }
  deactivate(id: string) {
    return this.prisma.sku.update({
      where: { id },
      data: { isActive: false },
    });
  }

  search(query: any) {
    // query can include: code, name, categoryId, etc.
    return this.prisma.sku.findMany({
      where: {
        isActive: true,
        ...(query.code ? { id: query.code } : {}),
        ...(query.name
          ? {
              name: {
                contains: query.name,
                mode: 'insensitive',
              } as Prisma.StringFilter,
            }
          : {}),
        ...(query.categoryId ? { categoryId: query.categoryId } : {}),
      },
      include: { category: true, subcategory: true, brand: true, branch: true },
    });
  }
}
