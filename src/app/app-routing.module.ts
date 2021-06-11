import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from './Component/navbar/navbar.component';
import {BuscadorComponent} from './Component/buscador/buscador.component';
import {DetallesComponent} from '../app/Component/detalles/detalles.component'
import { from } from 'rxjs';

const routes: Routes = [
  {path: '', redirectTo:'Buscador', pathMatch:'full'},
  {path: 'Buscador', component: BuscadorComponent},
  {path: 'Detalles', component: DetallesComponent},
  {path: 'Detalles/:name', component: DetallesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routinComponents = [BuscadorComponent, DetallesComponent]
