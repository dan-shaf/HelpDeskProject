import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  // PROPERTIES
  //  INPUTS
  @Input() ticket: Ticket | undefined = undefined;
  //  OUTPUTS
  @Output() deleteme: EventEmitter<number> = new EventEmitter<number>();
  @Output() editme: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  // Ticket instance for EditTicket
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

  //  EMITTERS
  emitDeleteEvent() {
    this.deleteme.emit(this.ticket?.id)
  }
  emitEditEvent() {
    this.editme.emit(this.editticket)
  }
  // EditTicket Toggle functions
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
  // DetailsTicket Toggle functions
  showDetailsTicket() {
    this.expandTicketVisible=true;
  }
  hideDetailsTicket() {
    this.expandTicketVisible=false;
    this.editTicketVisible=false;
  }
}
