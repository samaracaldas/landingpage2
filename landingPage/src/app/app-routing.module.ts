import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { NossosCursosComponent } from './nossos-cursos/nossos-cursos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'sobre-nos', component: SobreNosComponent},
  { path: 'nossos-cursos', component: NossosCursosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
