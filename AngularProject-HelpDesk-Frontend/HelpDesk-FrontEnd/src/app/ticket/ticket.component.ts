import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @Input() ticket: Ticket | undefined = undefined;

  @Output() deleteme: EventEmitter<number> = new EventEmitter<number>();

  editticket: Ticket = {
    id: 0,
    name: '',
    description: '',
    status: 'open',
    favorite: false,
    useropened: '',
    userclosed: 'unassigned'
  };
  editTicketVisible: boolean = false;
  expandTicketVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  emitDeleteEvent() {
    this.deleteme.emit(this.ticket?.id)
  }
  emitEditEvent() {
    this.deleteme.emit(this.ticket?.id)
  }
  showEditTicket() {
    this.editTicketVisible=true;
  }
  hideEditTicket() {
    this.editTicketVisible=false;
  }
  showDetailsTicket() {
    this.expandTicketVisible=true;
  }
  hideDetailsTicket() {
    this.expandTicketVisible=false;
    this.editTicketVisible=false;
  }
}
