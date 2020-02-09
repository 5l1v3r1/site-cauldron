using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace SiteCauldron
{
    public static class SiteCauldronExtensions
    {
        /// <summary>
        /// Function application in function form.
        /// f(x) = x.To(f)
        /// </summary>
        /// <typeparam name="TA">Type of the argument of the function.</typeparam>
        /// <typeparam name="TB">Return type of the function.</typeparam>
        /// <param name="a">Argument of the function.</param>
        /// <param name="f">Function to apply the argument.</param>
        /// <returns>The elimination of the function with it's argument.</returns>
        public static TB To<TA, TB>(this TA a, Func<TA, TB> f) => f(a);

        /// <summary>
        /// Performs an action on a given object, and returns the object back.
        /// </summary>
        /// <typeparam name="TA">Type of the object to apply the action on.</typeparam>
        /// <param name="a">Object to apply the action on.</param>
        /// <param name="f">Action to apply on the object.</param>
        /// <returns>The object after the action applied to it.</returns>
        public static TA Do<TA>(this TA a, Action<TA> f) { f(a); return a; }

        /// <summary>
        /// Performs an action on an object if it satisfies a condition.
        /// </summary>
        /// <typeparam name="TA">Type of the object to apply the action on.</typeparam>
        /// <param name="a">Object to apply the action on.</param>
        /// <param name="p">Condition to be satisfied in order to apply the action.</param>
        /// <returns>A function which takes an action to apply on the object and
        /// returns the object after the action application.</returns>
        public static Func<Action<TA>, TA> DoIf<TA>(this TA a, Predicate<TA> p) =>
            f => { if (p(a)) f(a); return a; };

        public static MethodInfo GetGenericMethod(this Type type, string name, params Type[] typeArguments) =>
            type?.GetMethods().FirstOrDefault(m =>
                m.Name.Equals(name, StringComparison.Ordinal) && m.IsGenericMethod
            )?.MakeGenericMethod(typeArguments);
    }
}
