import { Body, Controller, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { LoginAdministradoresDTO } from 'src/models/AdministradoresDTO';
import { PerfilUsuarioDTO } from 'src/models/UsuariosDTO';

@Controller('usuarios')
export class UsuariosController {
    constructor(
        private usuariosService: UsuariosService
    ) { }

    @Post('/auth/login') 
    async loginUsuarios(@Body() loginInput: LoginAdministradoresDTO): Promise<PerfilUsuarioDTO> {
        return await this.usuariosService.loginUsuarios(loginInput);
    }
}
