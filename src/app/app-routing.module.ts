import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Aqui en las rutas utlizo carga perosoza o (LazyLoading)
const routes: Routes = [
  {path:'',loadChildren:()=>import('./login/login-module/login-module.module').then(d=>d.LoginModuleModule)},
  {path:'principal',loadChildren:()=>import('./principal/principal/principal.module').then(d=>d.PrincipalModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
