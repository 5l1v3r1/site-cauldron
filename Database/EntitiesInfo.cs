using Pluralize.NET.Core;
using SiteCauldron.Database;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace SiteCauldron.Services
{
    public class EntitiesInfo : IEntitiesInfo
    {
        private readonly Dictionary<string, Type> types;

        private readonly Dictionary<string, PropertyInfo> sets;


        public Type EntityType(string entityType) =>
            types.GetValueOrDefault(entityType?.ToUpperInvariant());

        public PropertyInfo EntitySet(string entityType) =>
            sets.GetValueOrDefault(entityType?.ToUpperInvariant());


        public EntitiesInfo()
        {
            Pluralizer pluralizer = new Pluralizer();

            types = Assembly
                .GetExecutingAssembly()
                .GetTypes()
                .Where(t => t.CustomAttributes
                    .Any(a => a.AttributeType
                        .Equals(typeof(TableAttribute))
                    )
                ).ToDictionary(t => pluralizer
                    .Pluralize(t.Name)
                    .ToUpperInvariant()
                );

            sets = typeof(Context)
                .GetProperties()
                .Where(p => p.PropertyType.Name
                    .StartsWith("DbSet", StringComparison.Ordinal)
                ).ToDictionary(p => p.Name
                    .ToUpperInvariant()
                );
        }
    }
}
