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
  @Output() editme: EventEmitter<Ticket> = new EventEmitter<Ticket>();

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
    this.editme.emit(this.editticket)
  }
  showEditTicket() {
    if (this.ticket) {
      this.editticket.id = this.ticket.id;
      this.editticket.name = this.ticket.name;
      this.editticket.description = this.ticket.description;
      this.editticket.status = this.ticket.status;
      this.editticket.favorite = this.ticket.favorite;
      this.editticket.useropened = this.ticket.useropened;
      this.editticket.userclosed = this.ticket.userclosed;
      this.editTicketVisible=true;
    }
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
