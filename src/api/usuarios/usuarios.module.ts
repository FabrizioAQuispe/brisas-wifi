import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { PrismaService } from 'src/utils/prisma.service';
import { UsuariosController } from './usuarios.controller';

@Module({
  controllers:[UsuariosController],
  providers: [UsuariosService,PrismaService]
})
export class UsuariosModule {}
