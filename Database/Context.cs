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


        protected override void OnModelCreating(ModelBuilder modelBuilder) =>
            modelBuilder.To(x =>
                new object()
                .Do(_ => x.Entity<UserProject>()
                    .HasOne(p => p.User)
                    .WithMany(u => u.Projects)
                    .OnDelete(DeleteBehavior.NoAction)
                    .HasForeignKey(p => p.UserId))
                .Do(_ => x.Entity<Payment>()
                    .HasOne(p => p.UserProject)
                    .WithOne(p => p.PaymentInfo)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasForeignKey<UserProject>(p => p.PaymentInfoId))
                .Do(_ => x.Entity<Payment>()
                    .HasOne(p => p.PaymentPrice)
                    .WithMany(p => p.Payments)
                    .OnDelete(DeleteBehavior.NoAction)
                    .HasForeignKey(p => p.PaymentPriceId))
            );


        /// <summary>
        /// Recieves an EntityEntry, calls to <see cref="DbContext.SaveChanges"/>
        /// and returns just the Entity for the given EntityEntry.
        /// For example: db.SaveAfter(db.Remove(db.Find<T>(id))) will commit a
        /// deletion of an object of a model T with a given id in some given
        /// context db.
        /// </summary>
        /// <typeparam name="T">Entity type.</typeparam>
        /// <param name="entity">Any entity entry from which to extract the entity.</param>
        /// <returns>The entity of the given entity entry.</returns>
        public T SaveAfter<T>(EntityEntry<T> entity) where T : class =>
            entity?.Entity.Do(_ => SaveChanges());

        /// <summary>
        /// Recieves an EntityEntry, calls to <see cref="DbContext.SaveChanges"/>
        /// and returns just the Entity for the given EntityEntry.
        /// For example: db.SaveAfter(db.Remove(db.Find<T>(id))) will commit a
        /// deletion of an object of a model T with a given id and in some given
        /// context db.
        /// </summary>
        /// <param name="entity">Any entity entry from which to extract the entity.</param>
        /// <returns>The entity of the given entity entry.</returns>
        public object SaveAfter(EntityEntry entity) =>
            entity?.Entity.Do(_ => SaveChanges());
    }
}
