export interface Ticket {
    id: number;
    name: string;
    description: string;
    status: string;         // is Ticket open, closed, anywhere in between
    favorite: boolean;
    useropened: string;     // first user to create Ticket
    userclosed: string;     // last user to close Ticket
}
