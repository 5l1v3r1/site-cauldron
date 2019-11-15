using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SiteCauldron.Database;
using SiteCauldron.Models;

namespace SiteCauldron.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UsersController : AbstractController<User>
    {
        public UsersController(Context db) : base(db, db.Users) { }
    }
}