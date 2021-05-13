import {IContacto} from './../interfaces/icontacto'


export class Contacto implements IContacto {
    id: number;
    nombre: string;
    apellidos: string;
    direccion: string;
    correo: string;
    telefono: number;
    bloqueado: boolean;
    foto: string;
    
    
    
    constructor(nombre:string , apellidos:string, direccion:string, correo:string, telefono:number, bloqueado: boolean,
        foto: string){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.direccion = direccion;
    this.correo = correo;
    this.telefono = telefono;
    this.bloqueado = bloqueado;
    this.foto = foto;
    }
    
    
    
    }