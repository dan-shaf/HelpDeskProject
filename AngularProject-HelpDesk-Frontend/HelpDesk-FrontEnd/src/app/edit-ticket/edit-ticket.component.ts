import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketApiService } from '../ticket-api.service';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {

  newticket: Ticket = {
    id: 0,
    name: '',
    description: '',
    status: 'open',
    favorite: false,
    useropened: '',
    userclosed: 'unassigned'
  };


  constructor() { }

  ngOnInit(): void {
  }

}
