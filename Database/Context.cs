using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using SiteCauldron.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiteCauldron.Database
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options) { }


        public DbSet<User> Users { get; set; }

        public DbSet<UserProject> UserProjects { get; set; }

        public DbSet<Payment> Payments { get; set; }

        public DbSet<PricesCatalogEntry> PricesCatalogEntries { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserProject>()
                .HasOne(p => p.User)
                .WithMany(u => u.Projects)
                .OnDelete(DeleteBehavior.NoAction)
                .HasForeignKey(p => p.UserId);

            modelBuilder.Entity<Payment>()
                .HasOne(p => p.UserProject)
                .WithOne(p => p.PaymentInfo)
                .OnDelete(DeleteBehavior.SetNull)
                .HasForeignKey<UserProject>(p => p.PaymentInfoId);

            modelBuilder.Entity<Payment>()
                .HasOne(p => p.PaymentPrice)
                .WithMany(p => p.Payments)
                .OnDelete(DeleteBehavior.NoAction)
                .HasForeignKey(p => p.PaymentPriceId);
        }


        public T SaveAfter<T>(EntityEntry<T> entity) where T : class
        {
            SaveChanges();
            return entity.Entity;
        }

        public object SaveAfter(EntityEntry entity)
        {
            SaveChanges();
            return entity.Entity;
        }
    }
}
