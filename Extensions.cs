using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace SiteCauldron
{
    public static class SiteCauldronExtensions
    {
        public static TB To<TA, TB>(this TA a, Func<TA, TB> f) => f(a);

        public static TA Do<TA>(this TA a, Action<TA> f) { f(a); return a; }

        public static MethodInfo GetGenericMethod(this Type type, string name, params Type[] typeArguments) =>
            type?.GetMethods().First(m =>
                m.Name.Equals(name, StringComparison.Ordinal) && m.IsGenericMethod
            ).MakeGenericMethod(typeArguments);
    }
}
