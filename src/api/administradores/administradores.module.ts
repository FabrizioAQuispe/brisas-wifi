import { Module } from '@nestjs/common';
import { AdministradoresController } from './administradores.controller';
import { PrismaService } from 'src/utils/prisma.service';
import { AdministradoresService } from './administradores.service';

@Module({
  controllers: [AdministradoresController],
  providers: [PrismaService,AdministradoresService]
})
export class AdministradoresModule {}
