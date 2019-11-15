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
