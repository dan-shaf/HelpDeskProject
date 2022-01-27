import { Component } from '@angular/core';
import { TicketApiService } from './ticket-api.service';
import { Ticket } from './ticket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelpDesk-FrontEnd';

  constructor(private ticketapi:TicketApiService){}


}

