import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketApiService } from '../ticket-api.service';

@Component({
	selector: 'app-ticket-list',
	templateUrl: './ticket-list.component.html',
	styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

	tickets: Ticket[] = []

	constructor(private ticketapi: TicketApiService) {
		this.refreshList();
	}

	ngOnInit(): void {
	}

	refreshList() {
		this.ticketapi.getAll(
			(result: Ticket[]) => {
				console.log('Results!')
				console.log(result);
				this.tickets = result;
			}
		);
	}

	addTicket(ticket: Ticket) {
		this.ticketapi.add(ticket,
			() => {
				this.refreshList();
			}
		)
	}

	editTicket(){

	}

	deleteTicket(id: number) {
		this.ticketapi.delete(id,
			() => {
				this.refreshList();
			}
		)
	}
}
