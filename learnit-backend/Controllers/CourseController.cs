using Learnit_Backend.Data;
using Learnit_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

namespace Learnit_Backend.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly LearnitDbContext _context;

        public CourseController(LearnitDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<Course>> CreateCourse(Course course)
        {
            _context.Courses.Add(course);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Course), new { id = course.Id }, course);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCourse(int id, Course course)
        {
            if (id != course.Id)
            {
                return BadRequest();
            }

            _context.Entry(course).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            Console.WriteLine(course.Name.ToString());
            return NoContent();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Course>> GetCourse(int id)
        {
            var course = await _context.Courses.FindAsync(id);

            if (course == null)
            {
                return NotFound();
            }

            return course;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourse(int id)
        {
            var course = await _context.Courses.FindAsync(id);
            if (course == null)
            {
                return NotFound();
            }

            _context.Courses.Remove(course);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("{id}/description")]
        public async Task<ActionResult<string>> GetCourseDescription(int id)
        {
            var course = await _context.Courses.FindAsync(id);
            if (course == null || course.CDesc == null)
            {
                return NoContent();
            }
            return course.CDesc;
        }

        [HttpPut("{id}/description")]
        public async Task<IActionResult> UpdateCourseDescription(int id, [FromBody] JsonElement payload)
        {
            var course = await _context.Courses.FindAsync(id);
            if (course == null)
            {
                return NotFound();
            }

            string UDescription = payload.GetProperty("UDescription").ToString();
            course.CDesc = UDescription;
            _context.Entry(course).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent(); // Return a 204 No Content status code to indicate success
        }

        private bool CourseExists(int id)
        {
            return _context.Courses.Any(e => e.Id == id);
        }



    }
}
