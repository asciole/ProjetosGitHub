import { ManterPrestadorComponent } from './manter-prestador/manter-prestador.component';
import { PesquisaPrestadorComponent } from './pesquisa-prestador/pesquisa-prestador.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { Routes, Router, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';



const rotas: Routes = [
  { path: "", component:LoginComponent},
  { path:"login", component:LoginComponent},
  { path:"home", component:PrincipalComponent},
  { path:"prestador", component:PesquisaPrestadorComponent},
  { path:"prestador/novo", component:ManterPrestadorComponent}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(rotas);
