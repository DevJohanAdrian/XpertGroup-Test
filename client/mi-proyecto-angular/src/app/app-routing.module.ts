import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import {RegisterComponent} from './auth/pages/register/register.component';
import InicioComponent from './modules/dashboard/pages/inicio/inicio.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CatsBreedsComponent } from './modules/cats-breeds/pages/cats-breeds.component';
import { CatsTableComponent } from './modules/cats-table/pages/cats-table.component';

import { ProtectedComponent } from './auth/pages/protected/protected.component';
import { AuthGuard } from '../app/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
 
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
   
      {
        path: '',
        component: InicioComponent,
        // loadComponent: () =>
        //   import('./modules/dashboard/pages/inicio/inicio.component'),
      },
      {
        path: 'catTable',
        component: CatsTableComponent,
      },
      {
        path: 'cats',
        component: CatsBreedsComponent,
      },
    
    
     
      
    ],
  },
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // Fallback when no prior routes is matched or 404
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
