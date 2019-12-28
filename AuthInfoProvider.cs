using Microsoft.IdentityModel.Tokens;
using SiteCauldron.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiteCauldron
{
    public class AuthInfoProvider : IAuthInfoProvider
    {
        public TokenValidationParameters TokenValidationParameters { get; }


        public AuthInfoProvider(TokenValidationParameters tokenValidationParameters)
        {
            TokenValidationParameters = tokenValidationParameters;
        }
    }
}
