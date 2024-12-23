import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { Service } from '../models/service';
import { Business } from '../models/business';

@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  CURL = 'http://localhost:8080/Category';
  SURL = 'http://localhost:8080/Service';
  BURL = 'http://localhost:8080/Business';

  constructor(private http: HttpClient) {}

  createCategory(category: Category): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.CURL + '/create', category, { headers });
  }

  createService(service: Service): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.SURL + '/create', service, { headers });
  }

  createBusiness(formData: FormData): Observable<any> {
    return this.http.post(this.BURL + '/create', formData);
  }

  getCategory(): Observable<any[]> {
    return this.http.get<any[]>(this.CURL + '/public/list');
  }

  getService(): Observable<any[]> {
    return this.http.get<any[]>(this.SURL + '/public/list');
  }

  getBusiness(): Observable<any[]> {
    return this.http.get<any[]>(this.BURL + '/public/list');
  }

  getBusinessById(id: number): Observable<Business> {
    return this.http.get<Business>(`${this.BURL}/getById/${id}`);
  }

  updateBusinessById(id: number, business: Business): Observable<any> {
    return this.http.put(`${this.BURL}/edit/${id}`, business);
  }

  deleteBusiness(id: number): Observable<any> {
    return this.http.post(`${this.BURL}/delete/${id}`, {});
  }
}
