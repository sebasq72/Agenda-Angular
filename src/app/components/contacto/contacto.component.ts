import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
// Debemos agregar Eventemiter
import { Contacto } from '../../Models/contacto';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  panelOpenState = false;
  displayedColumns: string[] = ['Nombre'];
  //['Foto', 'Nombre', 'Direccion', 'Telefono', 'Correo'];


  @Input() contacto:Contacto;
  @Output() eventoBorrar : EventEmitter<Contacto> = new EventEmitter(); //Sera el encargado de enviar lo que se borrara
  @Output() eventoBloquear : EventEmitter<Contacto> = new EventEmitter();



  constructor() { }

  ngOnInit(): void {

  }

  //Este metodo se debe llamar en el selector desde el componente padre
  borrarContacto(contacto:Contacto){
    this.eventoBorrar.emit(contacto);
  }
  bloquearContacto(contacto:Contacto){
    //contacto.bloqueado = !contacto.bloqueado;
    this.eventoBloquear.emit(contacto);
  }

}
