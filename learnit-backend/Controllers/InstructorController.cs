using Microsoft.AspNetCore.Mvc;
using Learnit_Backend.Data; // Adjust the namespace according to your project structure
using Learnit_Backend.Models; // Adjust the namespace according to your project structure
using Microsoft.EntityFrameworkCore;


namespace Learnit_Backend.Controllers // Adjust the namespace according to your project structure
{
    public class InstructorController(LearnitDbContext context) : Controller
    {
        private readonly LearnitDbContext _context = context;

        // GET: Instructor/Index
        public async Task<IActionResult> Index()
        {
            List<Instructor> instructors = await _context.Instructors.ToListAsync();
            return View(instructors);
        }

        // GET: Instructor/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var instructor = await _context.Instructors.FirstOrDefaultAsync(m => m.Id == id);
            if (instructor == null)
            {
                return NotFound();
            }

            return View(instructor);
        }
    }
}
