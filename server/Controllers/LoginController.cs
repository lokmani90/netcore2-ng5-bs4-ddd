using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server.Models;

namespace server.Controllers
{
    [Route("api/login")]
    public class LoginController : Controller
    {
        
        [HttpGet]
        public IActionResult Login()
        {
            return Ok("token-valid");
        }

        
    }
}
