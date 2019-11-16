using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SiteCauldron.Database;

namespace SiteCauldron.Controllers
{
    //[Route("api/[controller]")]
    //[ApiController]
    public abstract class AbstractController<T> : ControllerBase where T : class
    {
        protected readonly Context db;

        public DbSet<T> Set { get; set; }

        protected AbstractController(Context context, DbSet<T> set)
        { 
            db = context;
            Set = set;
        }


        [HttpGet("{id}")]
        public ActionResult<T> Get(int id) => db.Find<T>(id);

        [HttpGet]
        public ActionResult<DbSet<T>> GetAll() => Set;

        public ActionResult<T> Put([FromBody] T entity) => db.Add(entity).Entity;

        public ActionResult<T> Patch([FromBody] T entity) => db.Update(entity).Entity;

        public ActionResult<T> Delete(int id) => db.Remove(db.Find<T>(id)).Entity;

        [HttpPut]
        public ActionResult<T> PutAndSave([FromBody] T entity) => db.SaveAfter(db.Add(entity));

        [HttpPatch]
        public ActionResult<T> PatchAndSave([FromBody] T entity) => db.SaveAfter(db.Update(entity));

        [HttpDelete("{id}")]
        public ActionResult<T> DeleteAndSave(int id) => db.SaveAfter(db.Remove(db.Find<T>(id)));
    }
}