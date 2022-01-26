using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularProject_HelpDesk.Models
{
    public class Ticket
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string status { get; set; }
        public bool favorite { get; set; }
        public string useropened { get; set; }
        public string userclosed { get; set; }


        public static List<Ticket> GetAll()
        {
            using (TicketContext ctx = new TicketContext())
            {
                var tickets = ctx.Tickets.ToList();
                return tickets;
            }
        }

        public static Ticket Add(Ticket theticket)
        {
            using (TicketContext ctx = new TicketContext())
            {
                ctx.Add(theticket);
                ctx.SaveChanges();
                return theticket;
            }
        }

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
    public class TicketContext : DbContext
    {
        public DbSet<Ticket> Tickets { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.\SQLEXPRESS;Database=helptickets;Integrated Security=SSPI;");
        }
    }
}