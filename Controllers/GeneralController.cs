using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Reflection;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SiteCauldron.Database;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Pluralize.NET.Core;
using System.ComponentModel.DataAnnotations.Schema;
using SiteCauldron.Services;

namespace SiteCauldron.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class GeneralController : ControllerBase
    {
        /**** PROPERTIES ****/

        private readonly Context db;
        private readonly IEntitiesInfo ei;


        /**** CONSTRUCTORS ****/

        public GeneralController(Context context, IEntitiesInfo entitiesInfo)
        {
            db = context;
            ei = entitiesInfo;
        }



        /**** HELPER FUNCTIONS ****/

        public ActionResult Mutate(string entityType, object entity, string action) =>
            ei.EntityType(entityType)
            ?.To(t => Ok(db.SaveAfter((EntityEntry)
                typeof(Context)
                .GetGenericMethod(action, t)
                .Invoke(db, new object[] {
                    typeof(JsonSerializer)
                    .GetGenericMethod("Deserialize", t)
                    .Invoke(null,
                        new object[] {
                            entity.ToString(),
                            null
                        }
                    )
                })
            ))) ?? (ActionResult)NotFound();



        /**** ENPOINTS ****/

        [HttpGet("{entityType}")]
        public ActionResult GetAll(string entityType) =>
            Ok(ei.EntitySet(entityType)?.GetValue(db));


        [HttpGet("{entityType}/{id}")]
        public ActionResult Get(string entityType, int id) =>
            ei.EntityType(entityType)
            ?.To(t => Ok(db.Find(t, id)))
            ?? (ActionResult)NotFound();


        [HttpPut("{entityType}")]
        public ActionResult Put(string entityType, [FromBody] object entity) =>
            Mutate(entityType, entity, "Add");


        [HttpPatch("{entityType}")]
        public ActionResult Patch(string entityType, [FromBody] object entity) =>
            Mutate(entityType, entity, "Update");


        [HttpDelete("{entityType}/{id}")]
        public ActionResult Delete(string entityType, int id) =>
            Mutate(entityType,
                JsonSerializer.Serialize(
                    ei.EntityType(entityType)
                    ?.To(t => db.Find(t, id)
                        .Do(e => db.Entry(e).State = EntityState.Detached)
                    )
                ), "Remove"
            );
    }
}