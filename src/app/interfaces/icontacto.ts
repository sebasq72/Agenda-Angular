export interface IContacto{
    id: number;
    nombre: string;
    apellidos: string;
    direccion: string;
    correo: string;
    telefono: number;
    bloqueado: boolean;
    foto: string;  
    token?:string;  
}

export interface ApiContactos {
    success : boolean,
    message : string,
    data? : IContacto[]
}