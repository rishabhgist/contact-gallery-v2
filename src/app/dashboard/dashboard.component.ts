import { Component, OnInit } from '@angular/core';
import { CONTACTS } from '../model/contacts';

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
