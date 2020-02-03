using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace SiteCauldron.Services
{
    public interface ICommonSingletons
    {
        public JwtSecurityTokenHandler JWT { get; }

        public SHA256 SHA256 { get; }
    }
}
