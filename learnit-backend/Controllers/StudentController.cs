using Learnit_Backend.Data;
using Learnit_Backend.Models;
// using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
 
namespace Learnit_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController(LearnitDbContext context) : ControllerBase
    {
        private readonly LearnitDbContext _context = context;

        [HttpPost]
        public async Task<ActionResult<Student>> CreateStudent(Student student)
        {
            _context.Students.Add(student);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Student), new { id = student.Id }, student);
        }
 
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateStudent(int id, Student student)
        {
            if (id != student.Id)
            {
                return BadRequest();
            }
 
            _context.Entry(student).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            Console.WriteLine(student.Name.ToString());
            return NoContent();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudent(int id)
        {
            var student = await _context.Students.FindAsync(id);
        
            if (student == null)
            {
                return NotFound();
            }
        
            return student;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student>>> GetStudents()
        {
            var students = await _context.Students.ToListAsync();

            if (students == null || !students.Any())
            {
                return NotFound();
            }

            return students;
        }

        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudent(int id)
        {
            var student = await _context.Students.FindAsync(id);
            if (student == null)
            {
                return NotFound();
            }
        
            _context.Students.Remove(student);
            await _context.SaveChangesAsync();
        
            return NoContent();
        }
 
        // Other CRUD endpoints (GET, DELETE) can be added similarly...
 
        private bool StudentExists(int id)
        {
            return _context.Students.Any(e => e.Id == id);
        }
    }
}