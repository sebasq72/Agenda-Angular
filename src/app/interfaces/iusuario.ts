export interface IUsuario{
  id: number;
  usuario: string;
  password: string;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: number;
}

export interface ApiUsuarios {
  success : boolean,
  message : string,
  data? : IUsuario[]
}
