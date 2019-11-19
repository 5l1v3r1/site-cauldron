using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SiteCauldron.Models
{
    [Table("payments")]
    public class Payment
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("payment_price_id")]
        public int PaymentPriceId { get; set; }

        public virtual PricesCatalogEntry PaymentPrice { get; set; }

        [Column("payment_date")]
        public DateTime DatePayment { get; set; }
        
        public virtual UserProject UserProject { get; set; }
    }
}
