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
        public string status { get; set; }  // is ticket active, pending, or closed
        public bool favorite { get; set; }
        public string useropened { get; set; }  // name of user to open ticket  
        public string userclosed { get; set; }  // name of user to close ticket

        // METHODS
        // function returns copy of List
        public static List<Ticket> GetAll()
        {
            using (TicketContext ctx = new TicketContext())
            {
                var tickets = ctx.Tickets.ToList();
                return tickets;
            }
        }

        // function adds one (1) given ticket to List, saves to Database
        public static Ticket Add(Ticket theticket)
        {
            using (TicketContext ctx = new TicketContext())
            {
                ctx.Add(theticket);
                ctx.SaveChanges();
                return theticket;
            }
        }
        
        // function deletes one (1) ticket from Database
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
    }

    // this is a localhost server
    public class TicketContext : DbContext
    {
        // PARAMETERS
        public DbSet<Ticket> Tickets { get; set; }

        // METHODS
        // function sets Databse
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.\SQLEXPRESS;Database=helptickets;Integrated Security=SSPI;");
        }
    }
}