using Learnit_Backend.Data;
using Learnit_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

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

        // GET: api/Course_Student_Mapping/course/{id}
        [HttpGet("course/{id}")]
        public IActionResult GetStudentsEnrolledForCourse(int id)
        {
            var studentIds = _context.Course_student_mappings
                                    .Where(mapping => mapping.C_Id == id)
                                    .Select(mapping => mapping.S_Id)
                                    .ToList();

            return Ok(studentIds);
        }

        // GET: api/Course_Student_Mapping/student/{id}
        [HttpGet("student/{id}")]
        public IActionResult GetCoursesEnrolledByStudent(int id)
        {
            var courseIds = _context.Course_student_mappings
                                   .Where(mapping => mapping.S_Id == id)
                                   .Select(mapping => mapping.C_Id)
                                   .ToList();

            return Ok(courseIds);
        }
        
        private bool CourseStudentMappingExists(int courseId, int studentId)
        {
            return _context.Course_student_mappings.Any(e => e.C_Id == courseId && e.S_Id == studentId);
        }
    }
}
