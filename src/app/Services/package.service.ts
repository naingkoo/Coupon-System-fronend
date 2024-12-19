import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Packages } from '../models/package-model';
import { Business } from '../models/business';

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  constructor(private http: HttpClient) {}

  getALL(): Observable<Packages[]> {
    return this.http.get<Packages[]>('http://localhost:8080/package/public/list');
  }

  create(formData: FormData): Observable<any> {
    console.log(formData);
    return this.http.post('http://localhost:8080/package/save', formData);
  }

  findByid(id: any): Observable<any> {
    return this.http.get('http://localhost:8080/package/find/${id}');
  }

  findBybusinessId(id: number): Observable<Packages[]> {
    return this.http.get<Packages[]>(
      `http://localhost:8080/package/findByBusinessId/${id}`
    );
  }
}
