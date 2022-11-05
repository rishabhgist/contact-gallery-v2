import { Component, OnInit } from '@angular/core';
import { CONTACTS } from '../model/contacts';
import { Contact } from '../model/contact';
import { ContactService } from '../service/contact.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  contacts:Contact={}


  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
  }

  addContact(){
    if(this.contacts.firstName){
      this.contactService.addContact(this.contacts).subscribe(
        {next(x) {alert("Contact Succesfully Added!")},
      error(){alert("Error Occured")
      }}
      )
    }
    this.clearForm()
    window.location.reload();
  }
 
  clearForm(){
    this.contacts={}
  }
}
