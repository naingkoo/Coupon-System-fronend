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
import { EditBusinessComponent } from './edit/edit-business/edit-business.component';
import { EditPackagesComponent } from './edit/edit-packages/edit-packages.component';
import { AdmCategorylistComponent } from './adm-categorylist/adm-categorylist.component';
import { AdmServicelistComponent } from './adm-servicelist/adm-servicelist.component';
import { CusPaymentComponent } from './cus-payment/cus-payment.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { BusinessHomeComponent } from './business-home/business-home.component';
import { BusinessSaleComponent } from './business-sale/business-sale.component';
import { ScanHistoryComponent } from './scan-history/scan-history.component';
import { BusinessPackageComponent } from './business-package/business-package.component';
import { BusinessContactComponent } from './business-contact/business-contact.component';
import { BusinessAboutComponent } from './business-about/business-about.component';
import { AdmRegisterComponent } from './adm-register/adm-register.component';
import { loginGuard } from './core/guards/login.guard';
import { AdmCouponSalelistComponent } from './adm-coupon-salelist/adm-coupon-salelist.component';
import { AdmFeedbackComponent } from './adm-feedback/adm-feedback.component';
import { AdmBusinessDetailsComponent } from './adm-business-details/adm-business-details.component';
import { CusProfileComponent } from './cus-profile/cus-profile.component';
import { AdmProfileComponent } from './adm-profile/adm-profile.component';
import { BusinessProfileComponent } from './business-profile/business-profile.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: CusHomeComponent },
  { path: 'explore', component: CusExploreComponent },
  { path: 'package', component: CusPackageComponent },
  { path: 'business/:id', component: CusBusinessComponent },
  { path: 'about', component: CusAboutComponent },
  { path: 'contact-us', component: CusContactComponent },
  { path: 'history', component: CusHistoryComponent },
  { path: 'cart', component: CusCartComponent },
  { path: 'payment', component: CusPaymentComponent },
  { path: 'my-coupon', component: MyCouponComponent },
  { path: 'cus-profile/:userId', component: CusProfileComponent },
  {
    path: 'adm-dashboard',
    component: AdmHomeComponent,
    canActivate: [authGuard],
    data: { role: 'ADMIN' },
  },
  {
    path: 'adm-business-details/:id',
    component: AdmBusinessDetailsComponent,
    canActivate: [authGuard],
    data: { role: 'ADMIN' },
  },
  {
    path: 'adm-dashboard',
    component: AdmHomeComponent,
    canActivate: [authGuard],
    data: { role: 'ADMIN' },
  },
  {
    path: 'adm-business',
    component: AdmBusinessComponent,
    canActivate: [authGuard],
    data: { role: 'ADMIN' },
  },
  {
    path: 'adm-categorylist',
    component: AdmCategorylistComponent,
    canActivate: [authGuard],
    data: { role: 'ADMIN' },
  },
  {
    path: 'adm-servicelist',
    component: AdmServicelistComponent,
    canActivate: [authGuard],
    data: { role: 'ADMIN' },
  },
  {
    path: 'adm-package',
    component: AdmPackageComponent,
    canActivate: [authGuard],
    data: { role: 'ADMIN' },
  },
  {
    path: 'adm-user-list',
    component: AdmUserListComponent,
    canActivate: [authGuard],
    data: { role: 'ADMIN' },
  },
  {
    path: 'adm-register',
    component: AdmRegisterComponent,
    canActivate: [authGuard],
    data: { role: 'ADMIN' },
  },
  {
    path: 'adm-coupon',
    component: AdmCouponSalelistComponent,
    canActivate: [authGuard],
    data: { role: 'ADMIN' },
  },
  {
    path: 'adm-feedback',
    component: AdmFeedbackComponent,
    canActivate: [authGuard],
    data: { role: 'ADMIN' },
  },
  {
    path: 'adm-profile',
    component: AdmProfileComponent,
    canActivate: [authGuard],
    data: { role: 'ADMIN' },
  },
  {
    path: 'Business/create',
    component: CreateBusinessComponent,
    canActivate: [authGuard],
    data: { role: 'ADMIN' },
  },
  {
    path: 'Business/edit/:id',
    component: EditBusinessComponent,
    canActivate: [authGuard],
    data: { role: 'ADMIN' },
  },
  {
    path: 'edit-package/:id',
    component: EditPackagesComponent,
    canActivate: [authGuard],
    data: { role: 'ADMIN' },
  },
  {
    path: 'adm-business/Category/create',
    component: AddBusinessCategoriesComponent,
    canActivate: [authGuard],
    data: { role: 'ADMIN' },
  },
  {
    path: 'Service/create',
    component: AddBusinessServicesComponent,
    canActivate: [authGuard],
    data: { role: 'ADMIN' },
  },
  {
    path: 'Package/create/:id',
    component: CreatePackagesComponent,
    canActivate: [authGuard],
    data: { role: 'ADMIN' },
  },

  { path: 'business-home', component: BusinessHomeComponent },
  { path: 'business-sale', component: BusinessSaleComponent },
  { path: 'business-package', component: BusinessPackageComponent },
  { path: 'business-contact', component: BusinessContactComponent },
  { path: 'business-about', component: BusinessAboutComponent },
  { path: 'business-profile', component: BusinessProfileComponent },
  { path: 'scanner', component: ScannerComponent },
  { path: 'scan-history', component: ScanHistoryComponent },
  { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
  { path: '404', component: NotFoundComponent },
  { path: 'serverIsDown', component: ServerDownpageComponent },
  { path: '401', component: UnauthorizedComponent },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
