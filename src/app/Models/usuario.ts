import { IUsuario } from "../interfaces/iusuario";

export class Usuario implements IUsuario {

  id: number;
  usuario: string;
  password: string;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: number;

  constructor(
    id: number,
    usuario: string,
    password: string,
    nombre: string,
    apellido: string,
    correo: string,
    telefono: number){

      this.id = id;
      this.usuario = usuario;
      this.password = password;
      this.nombre = nombre;
      this.apellido = apellido;
      this.correo = correo;
      this.telefono = telefono;

  }
}
