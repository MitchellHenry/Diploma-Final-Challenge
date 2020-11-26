using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DipFinalChallengeAPI.Models;

namespace DipFinalChallengeAPI.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class MembersController : ControllerBase
    {
        private readonly DiplomaFinalChallengeContext _context;

        public MembersController(DiplomaFinalChallengeContext context)
        {
            _context = context;
        }

        // GET: api/Members
        [HttpGet,Route("Authorized")]
        public async Task<ActionResult<IEnumerable<Member>>> GetAuthorizedMembers()
        {
            return await _context.Members.Where(a => a.Status == "authorized").ToListAsync();
        }
        [HttpGet,Route("Pending")]
        public async Task<ActionResult<IEnumerable<Member>>> GetPendingMembers()
        {
            return await _context.Members.Where(a => a.Status == "pending").ToListAsync();
        }

        // GET: api/Members/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Member>> GetMember(int id)
        {
            var member = await _context.Members.FindAsync(id);

            if (member == null)
            {
                return NotFound();
            }

            return member;
        }
        // GET: api/Members/5
        [HttpGet("{id}"),Route("TotalSpent")]
        public async Task<ActionResult<double[]>> TotalSpent()
        {
            double[] array = new double[_context.Members.ToList().Count];
            int c = 0;
            List<Member> m = new List<Member>();
            foreach (var a in _context.Members){
                if (a.Status == "authorized") {
                    m.Add(a);
                }
            }
            foreach (var d in m) {
                double cost = 0.00;
                foreach (var i in _context.BasketballGames)
                {
                    if (i.Shouter == d.Name)
                    {
                        cost = cost + Convert.ToDouble(i.Cost);
                    }
                }
                array[c] = cost;
                c++;
            }          
            await _context.SaveChangesAsync();
            return array;
        }

        // PUT: api/Members/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMember(int id, Member member)
        {
            if (id != member.Id)
            {
                return BadRequest();
            }

            _context.Entry(member).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MemberExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Members
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost, Route("signup")]
        public async Task<ActionResult<Member>> PostMember(Member member)
        {
            _context.Members.Add(member);
            await _context.SaveChangesAsync();
                    return CreatedAtAction("GetMember", new { id = member.Id }, member);       
        }

        [HttpPost, Route("login")]
        public async Task<IActionResult> Login(Login login)
        {
            var member = await _context.Members.Where(m => m.Email == login.email && m.Password == login.password && m.Status == "authorized").FirstOrDefaultAsync();
            if (member != null)
            {
                return Ok(member);
            }
            else
            {
                return NotFound();
            }
        }

        // DELETE: api/Members/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Member>> DeleteMember(int id)
        {
            var member = await _context.Members.FindAsync(id);
            if (member == null)
            {
                return NotFound();
            }

            _context.Members.Remove(member);
            await _context.SaveChangesAsync();

            return member;
        }

        private bool MemberExists(int id)
        {
            return _context.Members.Any(e => e.Id == id);
        }
    }
}
