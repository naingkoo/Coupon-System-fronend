import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CusHomeComponent } from './cus-home/cus-home.component';
import { CusAboutComponent } from './cus-about/cus-about.component';
import { CusCartComponent } from './cus-cart/cus-cart.component';
import { CusContactComponent } from './cus-contact/cus-contact.component';
import { CusHistoryComponent } from './cus-history/cus-history.component';
import { CusBusinessComponent } from './cus-business/cus-business.component';
import { CusPaymentComponent } from './cus-payment/cus-payment.component';
import { AdmHomeComponent } from './adm-home/adm-home.component';
import { AdmBusinessComponent } from './adm-business/adm-business.component';
import { AdmPackageComponent } from './adm-package/adm-package.component';
import { AmdSaleComponent } from './amd-sale/amd-sale.component';
import { CusEditComponent } from './edit/cus-edit/cus-edit.component';
import { AdmRegisterComponent } from './adm-register/adm-register.component';
import { MyCouponComponent } from './my-coupon/my-coupon.component';
import { AdmSidebarComponent } from './adm-sidebar/adm-sidebar.component';
import { CusExploreComponent } from './cus-explore/cus-explore.component';
import { CusPackageComponent } from './cus-package/cus-package.component';
import { AdmCategorylistServicelistComponent } from './adm-categorylist-servicelist/adm-categorylist-servicelist.component';
import { AdmCategorylistComponent } from './adm-categorylist/adm-categorylist.component';
import { AdmServicelistComponent } from './adm-servicelist/adm-servicelist.component';
import { AdmUserListComponent } from './adm-user-list/adm-user-list.component';

import { AddBusinessCategoriesComponent } from './create/add-business-categories/add-business-categories.component';
import { AddBusinessServicesComponent } from './create/add-business-services/add-business-services.component';
import { CreateBusinessComponent } from './create/create-business/create-business.component';
import { CreatePackagesComponent } from './create/create-packages/create-packages.component';

import { EditBusinessComponent } from './edit/edit-business/edit-business.component';
import { EditPackagesComponent } from './edit/edit-packages/edit-packages.component';

import { BusinessHomeComponent } from './business-home/business-home.component';
import { BusinessSaleComponent } from './business-sale/business-sale.component';
import { BusinessNavigationComponent } from './business-navigation/business-navigation.component';
import { ScannerComponent } from './scanner/scanner.component';
import { ScanHistoryComponent } from './scan-history/scan-history.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { ServerDownpageComponent } from './server-downpage/server-downpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { UnauthorizedComponent } from './shared/unauthorized/unauthorized.component';
import { BusinessPackageComponent } from './business-package/business-package.component';
import { BusinessAboutComponent } from './business-about/business-about.component';
import { BusinessContactComponent } from './business-contact/business-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CusHomeComponent,
    CusAboutComponent,
    CusCartComponent,
    CusContactComponent,
    CusHistoryComponent,
    CusBusinessComponent,
    CusPaymentComponent,
    NotFoundComponent,
    AdmHomeComponent,
    AdmBusinessComponent,
    AdmPackageComponent,
    AmdSaleComponent,
    ProfileComponent,
    AdmUserListComponent,
    CreateBusinessComponent,
    CreatePackagesComponent,
    AddBusinessCategoriesComponent,
    AddBusinessServicesComponent,
    CusEditComponent,
    AdmRegisterComponent,
    ServerDownpageComponent,
    UnauthorizedComponent,
    NavigationComponent,
    FooterComponent,
    MyCouponComponent,
    AdmSidebarComponent,
    CusExploreComponent,
    ScannerComponent,
    CusPackageComponent,
    AdmCategorylistServicelistComponent,
    EditBusinessComponent,
    EditPackagesComponent,
    AdmCategorylistComponent,
    AdmServicelistComponent,
    BusinessHomeComponent,
    ScanHistoryComponent,
    BusinessSaleComponent,
    BusinessNavigationComponent,
    BusinessPackageComponent,
    BusinessAboutComponent,
    BusinessContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ReactiveFormsModule,
    NgbModule,
    NgxChartsModule,
    ToastrModule.forRoot({
      // Toastr configuration
      positionClass: 'toast-top-right',
      timeOut: 4000, // Duration for which the toast stays visible (in ms)
      preventDuplicates: true,
      progressBar: true, // Prevent duplicate toasts
      newestOnTop: true, // New toasts will appear at the top
      maxOpened: 3, // Only show up to 3 toasts at a time
    }),
  ],
  providers: [
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
  ],

  bootstrap: [AppComponent],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
