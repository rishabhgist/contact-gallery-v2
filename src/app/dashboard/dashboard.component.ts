import { Component, OnInit } from '@angular/core';
import { CONTACTS } from '../model/contacts';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  contacts = CONTACTS;

  constructor() { }

  ngOnInit(): void {
  }

 

}
