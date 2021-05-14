import { Injectable } from '@angular/core';
import { IUsuario, ApiUsuarios } from './../interfaces/iusuario'
import { HttpClient } from '@angular/common/http'
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: IUsuario[] = [];
  usuario$: Subject<IUsuario[]>;
  constructor(private http: HttpClient) {
    this.usuario$ = new Subject();
    this.obtenerUsuarios();
  }

  getUsuario$(): Observable<IUsuario[]> {
    //Reenvia los datos desde el servicio
    this.obtenerUsuarios();
    return this.usuario$.asObservable();
  }


  actualizarUsuario(id: number, nuevo: IUsuario) {
    this.http.put<ApiUsuarios>(`/api/usuario/${id}`, nuevo).subscribe(data => {
      if (data.success) {
        this.obtenerUsuarios();
      } else {
        console.log(data.message);
      }
    })
  }
  agregarUsuario(usuario: IUsuario) {
    this.http.post<ApiUsuarios>('/api/usuario', usuario).subscribe(data => {
      if (data.success) {
        this.obtenerUsuarios();
      } else {
        console.log(data.message);
      }
    })
  }

  obtenerUsuario(id: number): IUsuario | null {
    const aux = this.usuario.filter(x => x.id == id);
    if (aux.length > 0) {
      return aux[0];
    } else {
      return null;
    }
  }

  eliminarUsuario(usuario: IUsuario) {

    this.http.delete<ApiUsuarios>(`/api/usuario/${usuario.id}`).subscribe(data => {
      if (data.success) {
        this.obtenerUsuarios();
      } else {
        console.log(data.message);
      }
    })

  }

  obtenerUsuarios() {
    this.http.get<ApiUsuarios>('/api/usuario').subscribe(data => {
      if (data.success) {
        this.usuario = data.data;
        this.usuario$.next(this.usuario);
      } else {
        console.log(data.message);
      }
    })
  }

}
