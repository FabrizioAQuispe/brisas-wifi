import { Module } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma.service';
import { EventosService } from './eventos.service';
import { EventosController } from './eventos.controller';

@Module({
    controllers: [EventosController],
    providers: [PrismaService,EventosService]
})
export class EventosModule {}
