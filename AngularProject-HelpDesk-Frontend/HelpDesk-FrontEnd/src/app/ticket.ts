export interface Ticket {
    id: number;
    name: string;
    description: string;
    status: string;      // is Ticket active, pending, or closed.
    favorite: boolean;
    useropened: string;  // name of user to open Ticket.
    userclosed: string;  // name of user to close Ticket.
}
