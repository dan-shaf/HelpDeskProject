using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularProject_HelpDesk.Models
{
    public class Ticket
    {
        // PARAMETERS
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string status { get; set; }      // is Ticket active, pending, or closed.
        public bool favorite { get; set; }
        public List<string> comments { get; set; }
        public string useropened { get; set; }  // name of user to open Ticket.
        public string userclosed { get; set; }  // name of user to close Ticket.

        // METHODS
        // function returns copy of List of Tickets.
        public static List<Ticket> GetAll()
        {
            using (TicketContext ctx = new TicketContext())
            {
                var tickets = ctx.Tickets.ToList();
                return tickets;
            }
        }

        // function adds one (1) Ticket to List, saves Database, and returns Ticket.
        public static Ticket Add(Ticket theticket)
        {
            using (TicketContext ctx = new TicketContext())
            {
                ctx.Add(theticket);
                ctx.SaveChanges();
                return theticket;
            }
        }
        
        // function deletes one (1) Ticket from Database and returns true on success.
        //    parses integer ID, creates and finds Ticket instance in Database by ID, removes ticket from Database, saves Database, and returns true on success.
        public static bool Delete(int id)
        {
            using (TicketContext ctx = new TicketContext())
            {
                Ticket theticket = new Ticket();
                theticket.id = id;
                ctx.Remove(theticket);
                ctx.SaveChanges();
                return true;
            }
        }

        public static Ticket Edit(Ticket ticket)
        {
            using (TicketContext ctx = new TicketContext())
            {
                ctx.Update(ticket);
                ctx.SaveChanges();
                return ticket;
            }
        }

    }

    // function is a localhost server for the Ticket Database.
    public class TicketContext : DbContext
    {
        // PARAMETERS
        public DbSet<Ticket> Tickets { get; set; }

        // METHODS
        // function sets Database
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.\SQLEXPRESS;Database=helptickets;Integrated Security=SSPI;");
        }
    }
}
