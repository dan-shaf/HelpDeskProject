import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketApiService } from '../ticket-api.service';

@Component({
	selector: 'app-ticket-list',
	templateUrl: './ticket-list.component.html',
	styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

	// PROPERTIES
	tickets: Ticket[] = []
	//	TOGGLES
	favTicketVisible: boolean = false;

	// METHODS
	constructor(private ticketapi: TicketApiService) {
		this.refreshList();
	}

	ngOnInit(): void {
	}

	// function refreshes the List
	refreshList() {
		this.ticketapi.getAll(
			(result: Ticket[]) => {
				console.log('Results!')
				console.log(result);
				this.tickets = result;
			}
		);
	}

	// Button functions
	addTicket(ticket: Ticket) {
		this.ticketapi.add(ticket,
			() => {
				this.refreshList();
			}
		)
	}

	deleteTicket(id: number) {
		this.ticketapi.delete(id,
			() => {
				this.refreshList();
			}
		)
	}

	editTicket(ticket: Ticket){
		this.ticketapi.edit(ticket,
			() => {
				this.refreshList()
			}
		)
	}

	favTicket(){
		this.favTicketVisible = !this.favTicketVisible;
	}

}
