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
    public class BasketballGamesController : ControllerBase
    {
        private readonly DiplomaFinalChallengeContext _context;

        public BasketballGamesController(DiplomaFinalChallengeContext context)
        {
            _context = context;
        }

        // GET: api/BasketballGames
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BasketballGame>>> GetBasketballGames()
        {
            return await _context.BasketballGames.ToListAsync();
        }

        // GET: api/CoffeeDates
        [HttpGet, Route("GetFutureGames")]
        public async Task<IActionResult> GetFutureGames()
        {
            //TimeZoneInfo AEDT = TimeZoneInfo.FindSystemTimeZoneById("AUS Eastern Standard Time");
            //DateTime Time = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, AEDT);
            var futureGames = await _context.BasketballGames.Where(c => c.Date > DateTime.Now).ToListAsync();
            return Ok(futureGames);// await _context.CoffeeDates.FromSqlRaw("Select * from CoffeeDates where [date] > GETDATE() or [date] = GETDATE() and [time] > " + Int32.Parse((Time.ToString("HHmm")))).ToListAsync();
        }
        // GET: api/CoffeeDates
        [HttpGet, Route("GetPastGames")]
        public async Task<IActionResult> GetPastGames()
        {
            //TimeZoneInfo AEDT = TimeZoneInfo.FindSystemTimeZoneById("AUS Eastern Standard Time");
            //DateTime Time = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, AEDT);
            var futureGames = await _context.BasketballGames.Where(c => c.Date < DateTime.Now).ToListAsync();
            return Ok(futureGames);// await _context.CoffeeDates.FromSqlRaw("Select * from CoffeeDates where [date] > GETDATE() or [date] = GETDATE() and [time] > " + Int32.Parse((Time.ToString("HHmm")))).ToListAsync();
        }

        // GET: api/BasketballGames/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BasketballGame>> GetBasketballGame(int id)
        {
            var basketballGame = await _context.BasketballGames.FindAsync(id);

            if (basketballGame == null)
            {
                return NotFound();
            }

            return basketballGame;
        }

        // PUT: api/BasketballGames/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBasketballGame(int id, BasketballGame basketballGame)
        {
            if (id != basketballGame.Id)
            {
                return BadRequest();
            }

            _context.Entry(basketballGame).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BasketballGameExists(id))
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

        // POST: api/BasketballGames
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost, Route("NewGame")]
        public async Task<ActionResult<BasketballGame>> PostBasketballGame(BasketballGame basketballGame)
        {
            _context.BasketballGames.Add(basketballGame);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBasketballGame", new { id = basketballGame.Id }, basketballGame);
        }

        // DELETE: api/BasketballGames/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<BasketballGame>> DeleteBasketballGame(int id)
        {
            var basketballGame = await _context.BasketballGames.FindAsync(id);
            if (basketballGame == null)
            {
                return NotFound();
            }

            _context.BasketballGames.Remove(basketballGame);
            await _context.SaveChangesAsync();

            return basketballGame;
        }

        private bool BasketballGameExists(int id)
        {
            return _context.BasketballGames.Any(e => e.Id == id);
        }
    }
}
