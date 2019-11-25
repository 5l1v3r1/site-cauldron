using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SiteCauldron.Models
{
    [Table("user_projects")]
    public class UserProject
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("user_id")]
        public int UserId { get; set; }

        public virtual User User { get; set; }

        [Column("project_name")]
        public string ProjectName { get; set; }

        [Column("description")]
        public string Description { get; set; }

        [Column("validated")]
        public bool Validated { get; set; }

        [Column("date_created")]
        public DateTime DateCreated { get; set; }

        [Column("date_last_modified")]
        public DateTime DateLastModified { get; set; }

        [Column("payment_info_id")]
        public int? PaymentInfoId { get; set; }

        public virtual Payment PaymentInfo { get; set; }

        [Column("schema")]
        public string Schema { get; set; }

        // TODO: Specify generated project field
    }
}
