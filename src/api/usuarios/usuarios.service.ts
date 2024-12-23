import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginAdministradoresDTO } from 'src/models/AdministradoresDTO';
import { PerfilUsuarioDTO } from 'src/models/UsuariosDTO';
import { PrismaService } from 'src/utils/prisma.service';

@Injectable()
export class UsuariosService {
    constructor(
        private prisma:PrismaService
    ){}

    async loginUsuarios(loginInput:LoginAdministradoresDTO) : Promise<PerfilUsuarioDTO>{
        try {
            const user_found = await this.prisma.usuarios.findFirst({
                where:{
                    correo:loginInput.correo,
                    password:loginInput.password
                }
            });

            if(!user_found.correo || !user_found.password){
                throw new UnauthorizedException("ERROR CREDENTIALS USER FOUND");
            }

            const result:PerfilUsuarioDTO = {
                id_user: user_found.id_user,
                nombre: user_found.nombre,
                dni: user_found.dni,
                fec_create: user_found.fec_create,
                fec_nac: user_found.fec_nac,
            }

            if(!result){
                throw new UnauthorizedException("USER NOT FOUND");
            }

            return result;
        } catch (error) {
            throw new Error('ERROR LOGIN USUARIOS SERVICE: ' + error.message);
        }
    }
}
