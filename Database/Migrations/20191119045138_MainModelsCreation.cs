using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SiteCauldron.Database.Migrations
{
    public partial class MainModelsCreation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "currently_active",
                table: "users",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "email",
                table: "users",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "last_activity",
                table: "users",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "password",
                table: "users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "phone_number",
                table: "users",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "prices_catalog",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    price_cents = table.Column<int>(nullable: false),
                    currency = table.Column<string>(nullable: true),
                    description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_prices_catalog", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "payments",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    payment_price_id = table.Column<int>(nullable: false),
                    payment_date = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_payments", x => x.id);
                    table.ForeignKey(
                        name: "FK_payments_prices_catalog_payment_price_id",
                        column: x => x.payment_price_id,
                        principalTable: "prices_catalog",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "user_projects",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    user_id = table.Column<int>(nullable: false),
                    project_name = table.Column<string>(nullable: true),
                    description = table.Column<string>(nullable: true),
                    date_created = table.Column<DateTime>(nullable: false),
                    date_last_modified = table.Column<DateTime>(nullable: false),
                    payment_info_id = table.Column<int>(nullable: true),
                    schema = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user_projects", x => x.id);
                    table.ForeignKey(
                        name: "FK_user_projects_payments_payment_info_id",
                        column: x => x.payment_info_id,
                        principalTable: "payments",
                        principalColumn: "id",
                        onDelete: ReferentialAction.SetNull);
                    table.ForeignKey(
                        name: "FK_user_projects_users_user_id",
                        column: x => x.user_id,
                        principalTable: "users",
                        principalColumn: "id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_payments_payment_price_id",
                table: "payments",
                column: "payment_price_id");

            migrationBuilder.CreateIndex(
                name: "IX_user_projects_payment_info_id",
                table: "user_projects",
                column: "payment_info_id",
                unique: true,
                filter: "[payment_info_id] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_user_projects_user_id",
                table: "user_projects",
                column: "user_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "user_projects");

            migrationBuilder.DropTable(
                name: "payments");

            migrationBuilder.DropTable(
                name: "prices_catalog");

            migrationBuilder.DropColumn(
                name: "currently_active",
                table: "users");

            migrationBuilder.DropColumn(
                name: "email",
                table: "users");

            migrationBuilder.DropColumn(
                name: "last_activity",
                table: "users");

            migrationBuilder.DropColumn(
                name: "password",
                table: "users");

            migrationBuilder.DropColumn(
                name: "phone_number",
                table: "users");
        }
    }
}
