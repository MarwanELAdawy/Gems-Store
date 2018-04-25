using AngularSession.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularSession.Services
{
    public class GemsService
    {
        public List<GemViewModel> GetAllGems()
        {
            List<GemViewModel> gems = new List<GemViewModel>();
            GemViewModel gem1 = new GemViewModel { Id = 1, Name = "Zircon", ImageUrl = "/Images/zircon.png", Price = 1000, Description = "This is zircon gem" };
            GemViewModel gem2 = new GemViewModel { Id = 2, Name = "Ruby", ImageUrl = "/Images/ruby.gif", Price = 2000, Description = "This is ruby gem" };
            GemViewModel gem3 = new GemViewModel { Id = 3, Name = "Emerald", ImageUrl = "/Images/emerald.gif", Price = 1500, Description = "This is emerald gem" };
            gems.Add(gem1);
            gems.Add(gem2);
            gems.Add(gem3);

            return gems;
        }

        public GemViewModel GetById(int id)
        {
            GemViewModel gem1 = new GemViewModel { Name = "Zircon", ImageUrl = "/Images/zircon.png", Price = 1000, Description = "This is zircon gem" };
            gem1.Specs = new SpecsViewModel { Shine = 70, Faces = 6, Rarity = 2, Color = "#0000" };

            GemViewModel gem2 = new GemViewModel { Name = "Ruby", ImageUrl = "/Images/ruby.gif", Price = 2000, Description = "This is ruby gem" };
            gem1.Specs = new SpecsViewModel { Shine = 100, Faces = 3, Rarity = 1, Color = "#e0115f " };

            GemViewModel gem3 = new GemViewModel { Name = "Emerald", ImageUrl = "/Images/emerald.gif", Price = 1500, Description = "This is emerald gem" };
            gem1.Specs = new SpecsViewModel { Shine = 70, Faces = 6, Rarity = 2, Color = "#50C878" };
            if (id == 1)
                return gem1;
            else if (id == 2)
                return gem2;
            else
                return gem3;
        }
    }
}