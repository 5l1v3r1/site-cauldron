using System;
using System.Collections.Generic;
using System.Globalization;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SiteCauldron.Database;
using SiteCauldron.Services;

namespace SiteCauldron.Controllers
{
    public class AuthInfo
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    [Route("[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ICommonSingletons sngl;
        private readonly IAuthInfoProvider aip;
        private readonly Context db;

        public AuthController(ICommonSingletons singletons, IAuthInfoProvider authInfoProvider, Context database) =>
            (aip, db, sngl) = (authInfoProvider, database, singletons);

        public string SHA256Hash(string s) => sngl.SHA256
            .ComputeHash(Encoding.UTF8.GetBytes(s))
            .SelectMany(c => c.ToString("X2", CultureInfo.InvariantCulture))
            .ToArray()
            .To(a => new string(a));

        public string CreateTokenFor(string username) =>
            sngl.JWT.WriteToken(new JwtSecurityToken(
                issuer: aip.TokenValidationParameters.ValidIssuer,
                audience: aip.TokenValidationParameters.ValidAudience,
                expires: DateTime.Now.AddMinutes(10), // Expires in 15 minutes
                signingCredentials: new SigningCredentials(
                    aip.TokenValidationParameters.IssuerSigningKey,
                    SecurityAlgorithms.HmacSha256Signature
                ),
                claims: new List<Claim>
                {
                    new Claim(ClaimTypes.Role, "Admin"),
                    new Claim(ClaimTypes.Name, username)
                }
            ));

        [HttpGet("token")]
        public ActionResult<string> GetToken([FromBody] AuthInfo authInfo) =>
            db.Users.FirstOrDefault(u => u.Email == authInfo.Email)
            ?.To(u => u.Password.Equals(
                SHA256Hash(authInfo.Password),
                StringComparison.InvariantCultureIgnoreCase)
                ? Ok(CreateTokenFor(u.Username)) : null
            ) ?? (ActionResult)Unauthorized();

        [HttpGet("renew")]
        public ActionResult<string> RenewToken() =>
            User.Identity.IsAuthenticated
                ? Ok(CreateTokenFor(User.FindFirstValue(ClaimTypes.Name)))
                : (ActionResult)Unauthorized();
    }
}