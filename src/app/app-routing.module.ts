import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CusHomeComponent } from './cus-home/cus-home.component';
import { ServerDownpageComponent } from './server-downpage/server-downpage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdmHomeComponent } from './adm-home/adm-home.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: CusHomeComponent },
  {path:"404",component:NotFoundComponent},{path:"serverIsDown",component:ServerDownpageComponent},
  {path:"adminHome",component:AdmHomeComponent,
    canActivate: [authGuard], 
    data: { role: 'ADMIN' } 
  },
  {path:"**",component:NotFoundComponent,pathMatch:"full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
