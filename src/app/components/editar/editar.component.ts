import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
contacto : number;
  constructor( private router : Router , private ruta : ActivatedRoute) {
    this.contacto = ruta.snapshot.params.telefono;
   }
        
  ngOnInit(): void {
  }

}
