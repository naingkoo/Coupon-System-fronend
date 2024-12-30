import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contact } from '../models/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
 private apiUrl = 'http://localhost:8080/api/feedback'; 
 private abiUrl = 'http://localhost:8080/api/feedback/list';
 
 constructor(private http: HttpClient) { }

 // Method to send the contact data to the backend
 submitContact(contact: contact): Observable<contact> {
  return this.http.post<contact>(this.apiUrl, contact);
}


// Get all submitted contacts from the backend
getContacts(): Observable<contact[]> {
  return this.http.get<contact[]>(this.apiUrl);
}
}
