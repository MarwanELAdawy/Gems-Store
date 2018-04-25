using AngularSession.Services;
using AngularSession.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularSession.API
{
    public class GemsController : ApiController
    {
        GemsService _gemsService;
        public GemsController()
        {
            _gemsService = new GemsService();
        }
        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(_gemsService.GetAllGems());
        }
        [HttpGet]
        public IHttpActionResult Get(int Id)
        {
            return Ok(_gemsService.GetById(Id));
        }
    }
}
