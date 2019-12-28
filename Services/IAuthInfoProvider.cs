using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiteCauldron.Services
{
    public interface IAuthInfoProvider
    {
        public TokenValidationParameters TokenValidationParameters { get; }
    }
}
