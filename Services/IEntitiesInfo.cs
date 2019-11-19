using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace SiteCauldron.Services
{
    public interface IEntitiesInfo
    {
        Type EntityType(string entityType);

        PropertyInfo EntitySet(string entityType);
    }
}
