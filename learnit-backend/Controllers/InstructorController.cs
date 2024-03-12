using System.Text.Json;
using Learnit_Backend.Data;
using Learnit_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
// using System.Linq;
// using System.Threading.Tasks;

namespace Learnit_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InstructorController(LearnitDbContext context) : ControllerBase
    {
        private readonly LearnitDbContext _context = context;

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

        [HttpGet()]
        public async Task<ActionResult<IEnumerable<Instructor>>> GetStudents()
        {
            var instructors = await _context.Instructors.ToListAsync();

            if (instructors == null || !instructors.Any())
            {
                return NotFound();
            }

            return instructors;
        }

        [HttpPost("auth")]
        public async Task<IActionResult> Auth([FromBody] JsonElement payload)
        {
            var instructors = await _context.Instructors.ToListAsync();
            try
            {
                string email = payload.GetProperty("email").ToString();
                string password = payload.GetProperty("password").ToString();
                foreach (var instructor in instructors)
                {
                    if (instructor.Email == email)
                    {
                        if (instructor.Password == password)
                        {
                            return Ok(new { id = instructor.Id });
                        }
                        else
                        {
                            return Unauthorized(new { message = "Invalid password" });
                        }
                    }
                }
                return NotFound(new { message = "The user with the email not found" });
            }
            catch (Exception)
            {
                return BadRequest(new { message = "Email or password not provided." });
            }


        }
    }
}
