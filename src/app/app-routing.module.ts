import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LenguajesComponent } from './componentes/lenguajes/lenguajes.component';
import { DescripcionComponent } from './componentes/descripcion/descripcion.component';
import { TasklistComponent } from './Tasklist/tasklist/tasklist.component';
import { NotasComponent } from './notas/notas/notas.component';
import { ListnotasComponent } from './listnotas/listnotas/listnotas.component';
 
const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'lenguajes', component: LenguajesComponent},
  {path: 'descripcion', component: DescripcionComponent},
  {path: 'Tasklist', component: TasklistComponent},
  {path: 'notas', component: NotasComponent},
  {path: 'listnotas', component: ListnotasComponent},
  {path: '**', pathMatch: 'full', redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
