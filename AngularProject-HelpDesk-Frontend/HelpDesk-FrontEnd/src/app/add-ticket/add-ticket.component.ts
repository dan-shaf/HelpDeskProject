import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  newticket: Ticket = {
    id: 0,
    name: '',
    description: '',
    status: 'open',
    favorite: false,
    useropened: '',
    userclosed: 'unassigned'
  };

  @Output() addticket: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  constructor() { }

  ngOnInit(): void {
  }
  addTicket() {
    this.addticket.emit(this.newticket)
  }

}
