using Learnit_Backend.Data;
using Learnit_Backend.Models;
// using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace Learnit_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InstructorController : ControllerBase
    {
        private readonly LearnitDbContext _context;
        public InstructorController(LearnitDbContext context)
        {
            _context = context;
        }
        [HttpPost]
        public async Task<ActionResult<Instructor>> CreateStudent(Instructor instructor)
        {
            _context.Instructors.Add(instructor);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Instructor), new { id = instructor.Id }, instructor);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateInstructor(int id, Instructor instructor)
        {
            if (id != instructor.Id)
            {
                return BadRequest();
            }
            _context.Entry(instructor).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Instructor>> GetInstructor(int id)
        {
            var instructor = await _context.Instructors.FindAsync(id);
        
            if (instructor == null)
            {
                return NotFound();
            }
        
            return instructor;
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInstructor(int id)
        {
            var instructor = await _context.Instructors.FindAsync(id);
            if (instructor == null)
            {
                return NotFound();
            }
        
            _context.Instructors.Remove(instructor);
            await _context.SaveChangesAsync();
        
            return NoContent();
        }
        // Other CRUD endpoints (GET, DELETE) can be added similarly...
        private bool InstructorExists(int id)
        {
            return _context.Instructors.Any(e => e.Id == id);
        }
    }
}