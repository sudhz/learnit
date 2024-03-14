using Learnit_Backend.Data;
using Learnit_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Learnit_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddVideoController : ControllerBase
    {
        private readonly LearnitDbContext _context;

        public AddVideoController(LearnitDbContext context)
        {
            _context = context;
        }

        // POST: api/AddVideo
        [HttpPost]
        public async Task<ActionResult<AddVideo>> PostAddVideo(AddVideo addVideo)
        {
            _context.AddVideo.Add(addVideo);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAddVideo), new { id = addVideo.Id }, addVideo);
        }

        // GET: api/AddVideo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AddVideo>>> GetAddVideo()
        {
            var addVideos = await _context.AddVideo.ToListAsync();
            if (addVideos == null || !addVideos.Any())
            {
                return NotFound();
            }

            return addVideos;
        }

        // GET: api/AddVideo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AddVideo>> GetAddVideo(int id)
        {
            var addVideo = await _context.AddVideo.FindAsync(id);
            if (addVideo == null)
            {
                return NotFound();
            }

            return addVideo;
        }

        // PUT: api/AddVideo/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAddVideo(int id, AddVideo addVideo)
        {
            if (id != addVideo.Id)
            {
                return BadRequest();
            }

            _context.Entry(addVideo).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/AddVideo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAddVideo(int id)
        {
            var addVideo = await _context.AddVideo.FindAsync(id);
            if (addVideo == null)
            {
                return NotFound();
            }

            _context.AddVideo.Remove(addVideo);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}