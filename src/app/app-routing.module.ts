import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';



const routes: Routes = [

  { 
    path: 'Login', 
    component: LoginComponent 
  },
  { 
    path: '', 
    redirectTo: '/Login', 
    pathMatch: 'full' 
  },
  { path: 'Home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
