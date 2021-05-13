import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/services/agenda.service';
import { Contacto } from '../../Models/contacto';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  
  contactos:Array<Contacto>;

  constructor(private _agenda : AgendaService) {
    //this.contactos = _agenda.obtenerContactos();
   }

  ngOnInit(): void {
      this._agenda.getAgenda$().subscribe(
        agenda => {
          this.contactos = agenda;
        }
      )
  }

  borrarContacto(contacto:Contacto){
    this._agenda.eliminarContacto(contacto);
  }

  bloquearContacto(contacto:Contacto){
    this._agenda.bloquearContacto(contacto);
    
  }



}
