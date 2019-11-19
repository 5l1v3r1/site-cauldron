using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SiteCauldron.Models
{
    [Table("prices_catalog")]
    public class PricesCatalogEntry
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("price_cents")]
        public int PriceCents { get; set; }

        [Column("currency")]
        public string Currency { get; set; }

        [Column("description")]
        public string Description { get; set; }


        public virtual IQueryable<Payment> Payments { get; set; }
    }
}
