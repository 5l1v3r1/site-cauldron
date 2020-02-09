using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EntityGraphQL;
using EntityGraphQL.Schema;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SiteCauldron.Database;

namespace SiteCauldron.Controllers
{
    [Route("gql")]
    [ApiController]
    public class GraphQLController : ControllerBase
    {
        private readonly Context db;
        private readonly MappedSchemaProvider<Context> sp;

        public GraphQLController(Context context, MappedSchemaProvider<Context> schemaProvider) =>
            (db, sp) = (context, schemaProvider);

        [HttpGet]
        public ActionResult Get([FromBody] QueryRequest query) =>
            Ok(db.QueryObject(query, sp));
    }
}