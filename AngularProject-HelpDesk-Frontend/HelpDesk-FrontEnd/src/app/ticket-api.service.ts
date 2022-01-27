import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from './ticket';

@Injectable({
	providedIn: 'root'
})
export class TicketApiService {

	constructor(private http: HttpClient) { }

	getAll(cb: any){
		this.http.get<Ticket[]>('https://localhost:7052/ticket').subscribe(cb);
	}

	add(newticket: Ticket, cb: any){
		this.http.post<Ticket[]>('https://localhost:7052/ticket', newticket).subscribe(cb);
	}

	delete(id: number, cb: any) {
		this.http.delete(`https://localhost:7052/ticket?id=${id}`).subscribe(cb);
	}
}
