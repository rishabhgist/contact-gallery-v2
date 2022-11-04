import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  URL:string="http://localhost:3000/contacts"
  constructor() { }
  
}
