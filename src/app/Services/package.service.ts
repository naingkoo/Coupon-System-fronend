import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.http.get<Packages[]>(
      'http://localhost:8080/package/public/list'
    );
  }

  create(formData: FormData): Observable<any> {
    console.log(formData);
    return this.http.post('http://localhost:8080/package/save', formData);
  }

 
  findByid(id:number): Observable<Packages> {
    return this.http.get<Packages>('http://localhost:8080/package/find/' + id); 
  }

  findBybusinessId(id: number): Observable<Packages[]> {
    return this.http.get<Packages[]>(
      `http://localhost:8080/package/findByBusinessId/${id}`
    );
  }
  getPackagesByBusinessName(businessName: String): Observable<Packages[]> {
    return this.http.get<Packages[]>(
      'http://localhost:8080/package/findByBusinessName/'+businessName
    );
  }

  updateByid(packages: Packages, selectedFile: File | null): Observable<any> {
    let url: string =
      'http://localhost:8080/package/update/' + packages.id;
    const formData = new FormData();

    formData.append(
      'packageDTO',
      new Blob([JSON.stringify(packages)], { type: 'application/json' })
    );

    if (selectedFile) {
      formData.append('image', selectedFile, selectedFile.name);
    }
    return this.http.put<any>(url, formData);
  }

  softDeletePackage(id: number): Observable<any> {
    let url = 'http://localhost:8080/package/delete/' + id;
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
  
    return this.http.delete<any>(url, { headers, responseType: 'text' as 'json' });
  }
 
}
