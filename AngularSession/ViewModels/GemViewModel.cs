using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularSession.ViewModels
{
    public class GemViewModel
    { 
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public float Price { get; set; }
        public string Description { get; set; }
        public SpecsViewModel Specs { get; set; }
    }
}