using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularProject_HelpDesk.Models;

namespace AngularProject_HelpDesk.Controllers
{

    // API controller #1
    [Route("ticket")]
    [ApiController]
    public class TicketController : ControllerBase
    {

        // METHODS
        // calls to methods from Ticket class
        [HttpGet]
        public List<Ticket> GetAll()
        {
            return Ticket.GetAll();

        }

        [HttpPost]
        public Ticket AddNew(Ticket newticket)
        {
            return Ticket.Add(newticket);
        }

        [HttpDelete]
        public bool Delete(int id)
        {
            return Ticket.Delete(id);
        }
    }
}