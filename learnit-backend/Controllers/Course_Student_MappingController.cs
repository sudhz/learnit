using Learnit_Backend.Data;
using Learnit_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Learnit_Backend.Controllers
{
   [Route("api/[controller]")]
   [ApiController]
   public class Course_Student_MappingController : ControllerBase
   {
       private readonly LearnitDbContext _context;

       public Course_Student_MappingController(LearnitDbContext context)
       {
           _context = context;
       }

       // GET: api/course_student_mapping/course/{id}
       [HttpGet("course/{id}")]
       public async Task<ActionResult<IEnumerable<Student>>> GetStudentsByCourseId(int id)
       {
           var courseStudentMappings = await _context.Course_student_mappings
               .Where(csm => csm.C_Id == id)
               .Include(csm => csm.Students)
               .ToListAsync();

           if (!courseStudentMappings.Any())
           {
               return NotFound();
           }

           var students = courseStudentMappings.Select(csm => csm.Students).ToList();

           return Ok(students);
       }

       // GET: api/course_student_mapping/student/{id}
       [HttpGet("student/{id}")]
       public async Task<ActionResult<IEnumerable<Course>>> GetCoursesByStudentId(int id)
       {
           var courseStudentMappings = await _context.Course_student_mappings
               .Where(csm => csm.S_Id == id)
               .Include(csm => csm.Courses)
               .ToListAsync();

           if (!courseStudentMappings.Any())
           {
               return NotFound();
           }

           var courses = courseStudentMappings.Select(csm => csm.Courses).ToList();

           return Ok(courses);
       }

       // GET: api/course_student_mapping/{courseId}/{studentId}
       [HttpGet("{courseId}/{studentId}")]
       public async Task<ActionResult<Course_Student_Mapping>> GetCourseStudentMapping(int courseId, int studentId)
       {
           var courseStudentMapping = await _context.Course_student_mappings
               .FirstOrDefaultAsync(csm => csm.C_Id == courseId && csm.S_Id == studentId);

           if (courseStudentMapping == null)
           {
               return NotFound();
           }

           return courseStudentMapping;
       }

       // POST: api/course_student_mapping
       [HttpPost]
       public async Task<ActionResult<Course_Student_Mapping>> CreateCourseStudentMapping(Course_Student_Mapping courseStudentMapping)
       {
           _context.Course_student_mappings.Add(courseStudentMapping);
           await _context.SaveChangesAsync();

           return CreatedAtAction(nameof(GetCourseStudentMapping), new { courseId = courseStudentMapping.C_Id, studentId = courseStudentMapping.S_Id }, courseStudentMapping);
       }

       // PUT: api/course_student_mapping/{courseId}/{studentId}
       [HttpPut("{courseId}/{studentId}")]
       public async Task<IActionResult> UpdateCourseStudentMapping(int courseId, int studentId, Course_Student_Mapping courseStudentMapping)
       {
           if (courseId != courseStudentMapping.C_Id || studentId != courseStudentMapping.S_Id)
           {
               return BadRequest();
           }

           _context.Entry(courseStudentMapping).State = EntityState.Modified;
           await _context.SaveChangesAsync();

           return NoContent();
       }

       // DELETE: api/course_student_mapping/{courseId}/{studentId}
       [HttpDelete("{courseId}/{studentId}")]
       public async Task<IActionResult> DeleteCourseStudentMapping(int courseId, int studentId)
       {
           var courseStudentMapping = await _context.Course_student_mappings
               .FirstOrDefaultAsync(csm => csm.C_Id == courseId && csm.S_Id == studentId);

           if (courseStudentMapping == null)
           {
               return NotFound();
           }

           _context.Course_student_mappings.Remove(courseStudentMapping);
           await _context.SaveChangesAsync();

           return NoContent();
       }

       private bool CourseStudentMappingExists(int courseId, int studentId)
       {
           return _context.Course_student_mappings.Any(e => e.C_Id == courseId && e.S_Id == studentId);
       }
   }
}