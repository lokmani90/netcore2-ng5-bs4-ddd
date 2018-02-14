using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]/[action]")]
    public class LoginController : Controller
    {

        [HttpPost]
        [ActionName("gettoken")]
        public IActionResult GetToken([FromBody] LoginDTO logindto)
        {
            return Ok("token-valid");
        }

        
    }
}
