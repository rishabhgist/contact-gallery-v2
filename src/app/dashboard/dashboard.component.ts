import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';
import { CONTACTS } from '../model/contacts';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  contacts:Contact[] = [];

  constructor(private service:ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.service.getContacts().subscribe(value=>this.contacts = value)
  }

}
