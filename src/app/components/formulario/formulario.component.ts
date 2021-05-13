import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/Models/contacto';
import { FormGroup , FormBuilder , Validators} from '@angular/forms'
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  rForm : FormGroup;
  @Input() editarid:number;
  editar : boolean;
  bloqueado: boolean;
  contacto:Contacto;
  contactoOri : Contacto;

  constructor(private router: Router , private fb : FormBuilder , private  _agenda : AgendaService) {
    this.rForm = fb.group({
      'id': [""],
      'nombre': ["" , Validators.compose([Validators.required , Validators.minLength(3)])],
      'apellidos': ["" , Validators.compose([Validators.required , Validators.minLength(3)])],
      'direccion': ["" , Validators.compose([Validators.required , Validators.minLength(6)])],
      'correo': ["" , Validators.compose([Validators.email , Validators.required])],
      'telefono': ["" , Validators.compose([Validators.required, Validators.min(3000000000) , Validators.max(3300000000)])],
      'foto': ["" , Validators.compose([Validators.required ])],
    });
   }

  ngOnInit(): void {
    this.contacto = new Contacto("", "","","",0,false,"");
    if (this.editarid == undefined || this.editarid == null) {
      this.editar = false;
    } else {
      this.editar = true;
      this.cargarContacto();
    }
  }

  onSubmit(post){
      if (this.editar) {
        this.actualizarContacto(post);
      } else {
        this.asignarContacto(post);
      }
  }

    cargarFoto(){
      const elementoFoto = <HTMLImageElement>document.getElementById("fotoPrevia");
      const inputFoto = <HTMLInputElement>document.getElementById("foto");
      if (inputFoto.checkValidity()) {
        elementoFoto.setAttribute("src" , inputFoto.value );
      }
    }


  actualizarContacto(post){
    this.contacto.nombre = post.nombre;
    this.contacto.apellidos = post.apellidos;
    this.contacto.direccion = post.direccion;
    this.contacto.correo = post.correo;
    this.contacto.telefono = post.telefono;
    this.contacto.foto = post.foto;
    this.contacto.bloqueado = false;
    this._agenda.actualizarContacto(this.contactoOri.id , this.contacto)
    this.router.navigate(["/home"] );
  }

cargarContacto(){
  const tmp = this._agenda.obtenerContacto(this.editarid);
      if (tmp != null) {
        this.contactoOri = tmp; 
        this.rForm.patchValue(
          {
            'nombre': this.contactoOri.nombre ,
            'apellidos': this.contactoOri.apellidos,
            'direccion': this.contactoOri.direccion,
            'correo': this.contactoOri.correo,
            'telefono': this.contactoOri.telefono,
            'foto': this.contactoOri.foto,
          }
        );
        const elementoFoto = <HTMLImageElement>document.getElementById("fotoPrevia");
        elementoFoto.setAttribute("src" , this.contactoOri.foto );
      } else {
            alert("El número de teléfono no pertenece a ningún contacto en la agenda!");
            this.router.navigate(["/home"] );
      }
    
  }
  asignarContacto(post){
    this.contacto.nombre = post.nombre;
    this.contacto.apellidos = post.apellidos;
    this.contacto.direccion = post.direccion;
    this.contacto.correo = post.correo;
    this.contacto.telefono = post.telefono;
    this.contacto.foto = post.foto;
    this.contacto.bloqueado = false;
    this._agenda.agregarContacto(this.contacto)  
    this.router.navigate(["/home"] );
      
  }



}
