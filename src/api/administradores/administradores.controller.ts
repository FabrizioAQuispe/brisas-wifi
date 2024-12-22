import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdministradoresService } from './administradores.service';
import { LoginAdministradoresDTO, PerfilAdministradorDTO } from 'src/models/AdministradoresDTO';

@Controller('administradores')
export class AdministradoresController {
    constructor(
        private administradoresService: AdministradoresService
    ) { }

    @Get('/list')
    async getAdministradores(): Promise<any> {
        return await this.administradoresService.getAdministradores();
    }

    @Post('/auth/login')
    async loginAdministradores(@Body() loginInput: LoginAdministradoresDTO): Promise<PerfilAdministradorDTO> {
        return await this.administradoresService.loginAdministradores(loginInput);
    }
}
