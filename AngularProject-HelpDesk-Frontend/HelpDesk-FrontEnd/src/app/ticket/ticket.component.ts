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

  constructor() { }

  ngOnInit(): void {
  }

  emitDeleteEvent() {
    this.deleteme.emit(this.ticket?.id)
  }
}
