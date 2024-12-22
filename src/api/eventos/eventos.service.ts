import { Injectable } from '@nestjs/common';
import { EventosDTO } from 'src/models/EventosDTO';
import { PrismaService } from 'src/utils/prisma.service';

@Injectable()
export class EventosService {
    constructor(
        private prisma: PrismaService
    ) { }

    async createEventos(eventos: EventosDTO): Promise<EventosDTO> {
        try {
            const response = await this.prisma.eventos.create({
                data: eventos
            })

            if (!response) {
                throw new Error('ERROR CREATE DATA');
            }

            return await response;
        } catch (error) {
            throw new Error('ERROR CREATE EVENTOS SERVICE: ' + error.message);
        }
    }

    async getEventos(): Promise<EventosDTO[]> {
        try {
            const response = await this.prisma.eventos.findMany();

            if (!response) {
                throw new Error('ERROR RESPONSE NOT FOUND DATA');
            }

            const result: EventosDTO[] = response.map(evento => ({
                id_evento: evento.id_evento,
                id_admin: evento.id_admin,
                id_user: evento.id_user,
                nombre: evento.nombre,
                descripcion: evento.descripcion,
                precio: evento.precio,
                fec_create: evento.fec_create,
                fec_ini: evento.fec_ini,
                fec_fin: evento.fec_fin,
            }));

            return result;
        } catch (error) {
            throw new Error('ERROR GET EVENTOS SERVICE: ' + error.message);
        }
    }
}
