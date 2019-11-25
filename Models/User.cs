using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SiteCauldron.Models
{
    [Table("users")]
    public class User
    {
        [Column("id")]
        [Key]
        public int Id { get; set; }

        [Column("username")]
        public string Username { get; set; }

        [Column("email")]
        public string Email { get; set; }

        [Column("password")]
        public string Password { get; set; }

        [Column("currently_active")]
        public bool CurrentlyActive { get; set; }

        [Column("last_activity")]
        public DateTime LastActivity { get; set; }


        public virtual IQueryable<UserProject> Projects { get; set; }
    }
}
