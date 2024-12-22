import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from 'src/utils/prisma.service';
import { AdministradoresService } from 'src/api/administradores/administradores.service';
import { AdministradoresModule } from 'src/api/administradores/administradores.module';
import { AdministradoresController } from 'src/api/administradores/administradores.controller';
import { UsuariosService } from 'src/api/usuarios/usuarios.service';
import { UsuariosController } from 'src/api/usuarios/usuarios.controller';
import { UsuariosModule } from 'src/api/usuarios/usuarios.module';
import { EventosModule } from 'src/api/eventos/eventos.module';
import { EventosController } from 'src/api/eventos/eventos.controller';
import { EventosService } from 'src/api/eventos/eventos.service';

@Module({
  imports: [
    AdministradoresModule,
    UsuariosModule,
    EventosModule
  ],
  controllers: [AppController,AdministradoresController,UsuariosController,EventosController],
  providers: [AppService,PrismaService,AdministradoresService,UsuariosService,EventosService],
})
export class AppModule {}
