using Microsoft.EntityFrameworkCore.Migrations;

namespace SiteCauldron.Database.Migrations
{
    public partial class FirstSchemaRevision : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "phone_number",
                table: "users");

            migrationBuilder.AddColumn<bool>(
                name: "validated",
                table: "user_projects",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "payment_reference",
                table: "payments",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "validated",
                table: "user_projects");

            migrationBuilder.DropColumn(
                name: "payment_reference",
                table: "payments");

            migrationBuilder.AddColumn<string>(
                name: "phone_number",
                table: "users",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
