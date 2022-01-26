using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AngularProject_HelpDesk_Backend.Migrations
{
    public partial class CreateTicket : Migration
    {
        // function creates Ticket database
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Tickets",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    favorite = table.Column<bool>(type: "bit", nullable: false),
                    useropened = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    userclosed = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tickets", x => x.id);
                });
        }

        // function deletes Ticket database
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tickets");
        }
    }
}
