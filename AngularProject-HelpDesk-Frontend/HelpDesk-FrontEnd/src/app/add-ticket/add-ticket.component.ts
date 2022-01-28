import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  // PROPERTIES
  newticket: Ticket = {
    id: 0,
    name: '',
    description: '',
    status: 'open',
    favorite: false,
    useropened: '',
    userclosed: 'unassigned'
  };

  //  TOGGLES
  createTicketVisible: boolean = false;

  //  EMITTERS
  @Output() addticket: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  // METHODS
  constructor() { }

  ngOnInit(): void {
  }

  // function outputs new ticket
  addTicket() {
    this.addticket.emit(this.newticket);
    this.hideCreateTicket();
    this.newticket.name = '';
    this.newticket.description = '';
    this.newticket.status = 'open',
    this.newticket.favorite = false,
    this.newticket.useropened = '',
    this.newticket.userclosed = 'unassigned'

  }
  // CreateTicket Toggle functions
  showCreateTicket() {
    this.createTicketVisible=true;
  }
  hideCreateTicket() {
    this.createTicketVisible=false;
  }

}
