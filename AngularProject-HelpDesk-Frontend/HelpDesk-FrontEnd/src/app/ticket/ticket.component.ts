import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  // PROPERTIES
  //   INPUTS
  @Input() ticket: Ticket | undefined = undefined;

  //   OUTPUTS
  @Output() deleteme: EventEmitter<number> = new EventEmitter<number>();

  // instance of Ticket for EditTicket form
  editticket: Ticket = {
    id: 0,
    name: '',
    description: '',
    status: 'open',
    favorite: false,
    useropened: '',
    userclosed: 'unassigned'
  };
  
  //   TOGGLES
  editTicketVisible: boolean = false;
  expandTicketVisible: boolean = false;

  // METHODS
  constructor() { }
  ngOnInit(): void {
  }

  //   EMITTERS
  emitDeleteEvent() {
    this.deleteme.emit(this.ticket?.id)
  }
  emitEditEvent() {
    this.deleteme.emit(this.ticket?.id)
  }
  // toggle functions for EditTicket form
  showEditTicket() {
    this.editTicketVisible=true;
  }
  hideEditTicket() {
    this.editTicketVisible=false;
  }
  // toggle functions for DetailsTicket form
  showDetailsTicket() {
    this.expandTicketVisible=true;
  }
  hideDetailsTicket() {
    this.expandTicketVisible=false;
    this.editTicketVisible=false;
  }
}
