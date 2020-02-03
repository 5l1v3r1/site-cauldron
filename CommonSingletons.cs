using SiteCauldron.Services;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace SiteCauldron
{
    public class CommonSingletons : ICommonSingletons
    {
        public JwtSecurityTokenHandler JWT { get; }

        public SHA256 SHA256 { get; }

        public CommonSingletons()
        {
            JWT = new JwtSecurityTokenHandler();
            SHA256 = SHA256.Create();
        }
    }
}
