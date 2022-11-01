import { Component, OnInit, Input} from '@angular/core';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  contact: any

  constructor() { }

  ngOnInit(): void {
  }

}
