import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginAdministradoresDTO, PerfilAdministradorDTO } from 'src/models/AdministradoresDTO';
import { PrismaService } from 'src/utils/prisma.service';

@Injectable()
export class AdministradoresService {
    constructor(
        private prisma:PrismaService
    ){}

    async getAdministradores() : Promise<any>{
        try {
            const response = await this.prisma.administradores.findMany();
            return response;
        } catch (error) {
            throw new Error('ERROR GET ADMINISTRADORES: ' + error.message);
        }
    }

    async loginAdministradores(loginInput:LoginAdministradoresDTO) : Promise<PerfilAdministradorDTO>{
        try {
            const user_found = await this.prisma.administradores.findFirst({
                where:{
                    correo: loginInput.correo,
                    password: loginInput.password
                }
            });

            if(!user_found){
                throw new UnauthorizedException('USUARIO NO ENCONTRADO');
            }

            const response:PerfilAdministradorDTO = {
                id_admin: user_found.id_admin,
                correo: user_found.correo,
                nombre: user_found.nombre
            }

            if(!response){
                throw new Error('ERROR RESPONSE FETCH ADMINISTRADORES');
            }

            return response;
        } catch (error) {
            throw new Error('ERROR LOGIN ADMINISTRADORES SERVICE: ' + error.message);
        }
    }
}
