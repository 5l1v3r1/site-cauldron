using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SiteCauldron.Database.Migrations
{
    public partial class UpdateLastActivityField : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "currently_active",
                table: "users");

            migrationBuilder.AlterColumn<DateTime>(
                name: "last_activity",
                table: "users",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "last_activity",
                table: "users",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "currently_active",
                table: "users",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
