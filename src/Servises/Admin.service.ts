import { Injectable } from '@angular/core';
import { Company } from '../entities/company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../entities/Coupon';
import { Customer } from '../entities/Customer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public httpClinet:HttpClient) { }

  public createCompany(company:Company):Observable<Company>{
    return this.httpClinet.post<Company>("http://localhost:8080/rest/Admin/createCompany",company,{withCredentials:true});
  }

public deleteCompany(companyId:number):Observable<Company>{
  return this.httpClinet.delete<any>("http://localhost:8080/rest/Admin/deleteCompany/"+companyId,{withCredentials:true});
}

public updateCompany(company:Company):Observable<Company>{

  return this.httpClinet.put<Company>("http://localhost:8080/rest/Admin/updateCompany",company,{withCredentials:true});
}

public viewAllCompanies():Observable<Company[]>{

  return this.httpClinet.get<Company[]>("http://localhost:8080/rest/Admin/getAllCompanys",{withCredentials:true});
}

public viewAllCompanyCoupons(companyId:number):Observable<Coupon[]>{
  return this.httpClinet.get<Coupon[]>("http://localhost:8080/rest/Admin/getAllCompanyCoupons/"+companyId,{withCredentials:true});
}


 public createCustomer(customer:Customer):Observable<Customer>{
    return this.httpClinet.post<Customer>("http://localhost:8080/rest/Admin/createCustomer",customer,{withCredentials:true});
  }

  public deleteCustomer(customer:Customer):Observable<Customer>{
    let customerId  = customer.id;
    return this.httpClinet.delete<any>("http://localhost:8080/rest/Admin/removeCustomer/"+customerId,{withCredentials:true});
  }

  public updateCustomer(customer:Customer):Observable<Customer>{

    return this.httpClinet.put<Customer>("http://localhost:8080/rest/Admin/updateCustomer",customer,{withCredentials:true});
  }

  public viewAllCustomers():Observable<Customer[]>{

    return this.httpClinet.get<Customer[]>("http://localhost:8080/rest/Admin/getAllCustomers",{withCredentials:true});
  }


  public viewAllCustomerCoupons(customerId:number):Observable<Coupon[]>{
    return this.httpClinet.get<Coupon[]>("http://localhost:8080/rest/Admin/getAllCustomerCoupons/"+customerId,{withCredentials:true});
  }
}
