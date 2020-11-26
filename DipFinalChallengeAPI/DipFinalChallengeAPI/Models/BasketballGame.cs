using System;
using System.Collections.Generic;

#nullable disable

namespace DipFinalChallengeAPI.Models
{
    public partial class BasketballGame
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Venue { get; set; }
        public decimal? Cost { get; set; }
        public string Shouter { get; set; }
        public string Booker { get; set; }
    }
}
