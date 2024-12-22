import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { EventosDTO } from 'src/models/EventosDTO';

@Controller('eventos')
export class EventosController {
    constructor(
        private eventosService: EventosService
    ) { }

    @Get('/list')
    async getEventos(): Promise<EventosDTO[]> {
        return await this.eventosService.getEventos()
    }

    @Post('/create')
    async createEventos(@Body() eventos: EventosDTO): Promise<EventosDTO> {
        return await this.eventosService.createEventos(eventos);
    }
}
