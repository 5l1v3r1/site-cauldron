using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SiteCauldron.Services;

namespace SiteCauldron.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthInfoProvider aip;

        public AuthController(IAuthInfoProvider authInfoProvider)
        {
            aip = authInfoProvider;
        }

        [HttpGet("token")]
        public ActionResult<string> GetToken() => new JwtSecurityTokenHandler().WriteToken(new JwtSecurityToken(
            issuer: aip.TokenValidationParameters.ValidIssuer,
            audience: aip.TokenValidationParameters.ValidAudience,
            expires: DateTime.Now.AddHours(1),
            signingCredentials: new SigningCredentials(
                aip.TokenValidationParameters.IssuerSigningKey,
                SecurityAlgorithms.HmacSha256Signature
            )
        ));
    }
}