import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from '../app/components/agenda/agenda.component';
import { ContactoComponent } from '../app/components/contacto/contacto.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import {EditarComponent} from './components/editar/editar.component'
const routes: Routes = [
  {
    path: '', component: AgendaComponent
  },
  {
    path: 'home', component: AgendaComponent
  },
  {
    path: 'nuevo', component: FormularioComponent
  },
  {
    path: 'editar/:telefono', component: EditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
