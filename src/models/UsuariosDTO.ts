export interface LoginUsuario{
    correo:string,
    password:string,
}
export interface PerfilUsuarioDTO{
    id_user:number,
    ip_user:string,
    nombre:string,
    dni:number,
    fec_nac:Date,
    fec_create:Date,
}

export interface UsuariosDTO{
    id_user:number,
    id_admin:number,
    ip_user:string,
    nombre:string,
    dni:number,
    correo:string,
    password:string,
    fec_nac:Date,
    fec_create:Date,
}
