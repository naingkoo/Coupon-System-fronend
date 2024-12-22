import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CusHomeComponent } from './cus-home/cus-home.component';
import { ServerDownpageComponent } from './server-downpage/server-downpage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './core/guards/auth.guard';
import { UnauthorizedComponent } from './shared/unauthorized/unauthorized.component';
import { CusAboutComponent } from './cus-about/cus-about.component';
import { CusContactComponent } from './cus-contact/cus-contact.component';
import { CusHistoryComponent } from './cus-history/cus-history.component';
import { CusCartComponent } from './cus-cart/cus-cart.component';
import { MyCouponComponent } from './my-coupon/my-coupon.component';
import { AdmHomeComponent } from './adm-home/adm-home.component';
import { CusBusinessComponent } from './cus-business/cus-business.component';
import { CusExploreComponent } from './cus-explore/cus-explore.component';
import { ScannerComponent } from './scanner/scanner.component';
import { RegisterComponent } from './register/register.component';
import { CusPackageComponent } from './cus-package/cus-package.component';
import { AdmBusinessComponent } from './adm-business/adm-business.component';
import { AdmPackageComponent } from './adm-package/adm-package.component';
import { AdmUserListComponent } from './adm-user-list/adm-user-list.component';
import { CreateBusinessComponent } from './create/create-business/create-business.component';
import { AddBusinessCategoriesComponent } from './create/add-business-categories/add-business-categories.component';
import { AddBusinessServicesComponent } from './create/add-business-services/add-business-services.component';
import { CreatePackagesComponent } from './create/create-packages/create-packages.component';

const routes: Routes = [

  { path: 'register', component: RegisterComponent },
  {path:"", redirectTo:"login", pathMatch:"full"},
  { path: 'home', component: CusHomeComponent },
  { path: 'explore', component: CusExploreComponent },
  { path: 'package', component: CusPackageComponent },
  { path: 'business/:id', component: CusBusinessComponent },
  { path: 'about', component: CusAboutComponent },
  { path: 'contact-us', component: CusContactComponent },
  { path: 'history', component: CusHistoryComponent },
  { path: 'cart', component: CusCartComponent },
  { path: 'my-coupon', component: MyCouponComponent },
  { path: 'adm-dashboard', component: AdmHomeComponent, canActivate: [authGuard], 
          data: { role: 'ADMIN' } },
  { path: 'adm-business', component: AdmBusinessComponent },
  { path: 'adm-package', component: AdmPackageComponent },
  { path: 'adm-user-list', component: AdmUserListComponent },
  { path: 'scanner', component: ScannerComponent },
  { path: 'Business/create', component: CreateBusinessComponent },
  {
    path: 'adm-business/Category/create',
    component: AddBusinessCategoriesComponent,
  },
  {
    path: 'Service/create',
    component: AddBusinessServicesComponent,
  },
  { path: 'Package/create/:id', component: CreatePackagesComponent },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: CusHomeComponent },
  {path:"404",component:NotFoundComponent},{path:"serverIsDown",component:ServerDownpageComponent},
  {path:"401",component:UnauthorizedComponent},
  {path:"**",component:NotFoundComponent,pathMatch:"full"}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
