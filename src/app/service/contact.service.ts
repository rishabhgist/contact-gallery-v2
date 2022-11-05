import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  URL:string="http://localhost:3000/contacts"

  constructor(private httpClient:HttpClient) { }
  
  getContacts():Observable<Array<Contact>>{
    return this.httpClient.get<Array<Contact>>(this.URL)
  }
  
  addContact(data:Contact){
    return this.httpClient.post(this.URL,data)
  }
}
