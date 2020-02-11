using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EntityGraphQL;
using EntityGraphQL.Schema;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
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
        public ActionResult<string> Get([FromBody] QueryRequest query) =>
            Ok(JsonConvert.SerializeObject(db.QueryObject(query, sp)));
    }
}