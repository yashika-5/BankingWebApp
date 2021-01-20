using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApplication5.Models
{
    public class WebApplication5Context : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public WebApplication5Context() : base("name=WebApplication5Context")
        {
        }

        public System.Data.Entity.DbSet<WebApplication5.customer> customers { get; set; }

        public System.Data.Entity.DbSet<WebApplication5.transaction> transactions { get; set; }
    }
}
