import { Injectable } from '@angular/core';
import {IContacto , ApiContactos} from './../interfaces/icontacto'
import {HttpClient} from '@angular/common/http'
import { Subject , Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
 agenda : IContacto[] = [];
 agenda$ : Subject<IContacto[]>;
  constructor( private http : HttpClient) {
    this.agenda$ = new Subject();
    this.obtenerContactos();
   }

   getAgenda$() : Observable<IContacto[]>{
     //Reenvia los datos desde el servicio
     this.obtenerContactos();
     return this.agenda$.asObservable();
   }


   actualizarContacto(id :number , nuevo :IContacto){
    this.http.put<ApiContactos>(`/api/agenda/${id}` , nuevo).subscribe( data => {
      if (data.success) {
          this.obtenerContactos();
      }else{
        console.log(data.message);
      }
    })
   }
   agregarContacto(contacto : IContacto){
    this.http.post<ApiContactos>('/api/agenda', contacto).subscribe( data => {
      if (data.success) {
          this.obtenerContactos();
      }else{
        console.log(data.message);
      }
    })
   }

   obtenerContacto(id : number):IContacto|null{
    const aux = this.agenda.filter(x => x.id == id);
    if (aux.length > 0) {
      return aux[0];
    }else{
      return null;
    }
   }

   bloquearContacto(contacto:IContacto){
      contacto.bloqueado = !contacto.bloqueado;
      this.actualizarContacto(contacto.id , contacto);

  }


   eliminarContacto(contacto : IContacto){

    this.http.delete<ApiContactos>(`/api/agenda/${contacto.id}`).subscribe( data => {
      if (data.success) {
          this.obtenerContactos();
      }else{
        console.log(data.message);
      }
    })

   }

   obtenerContactos(){
     this.http.get<ApiContactos>('/api/agenda').subscribe( data => {
       if (data.success) {
           this.agenda = data.data;
           this.agenda$.next(this.agenda);
       }else{
         console.log(data.message);
       }
     })
   }

}
