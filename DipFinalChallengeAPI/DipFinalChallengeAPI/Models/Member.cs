using System;
using System.Collections.Generic;

#nullable disable

namespace DipFinalChallengeAPI.Models
{
    public partial class Member
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public DateTime Dob { get; set; }
        public string Password { get; set; }
        public string Status { get; set; }
        public string Role { get; set; }
    }
}
