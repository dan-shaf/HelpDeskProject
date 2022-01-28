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
	// Ticket List
	tickets: Ticket[] = []

	// METHODS
	constructor(private ticketapi: TicketApiService) {
		this.refreshList();
	}

	ngOnInit(): void {
	}

	// function calls getAll, copies Ticket List to tickets 
	refreshList() {
		this.ticketapi.getAll(
			(result: Ticket[]) => {
				console.log('Results!')
				console.log(result);
				this.tickets = result;
			}
		);
	}

	// function adds current Ticket to List, refreshes Ticket List
	addTicket(ticket: Ticket) {
		this.ticketapi.add(ticket,
			() => {
				this.refreshList();
			}
		)
	}
	
	// function finds current Ticket by id, deletes current Ticket, refreshes Ticket List
	deleteTicket(id: number) {
		this.ticketapi.delete(id,
			() => {
				this.refreshList();
			}
		)
	}

	// TODO:
	// function finds current Ticket by id, edits current Ticket, refreshes Ticket List
	/*
	editTicket(id: number){
		this.ticketapi.edit(id,
			() => {
				this.refreshList();
			}
		)
	}
	*/
}
