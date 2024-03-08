using Microsoft.EntityFrameworkCore;
using Learnit_Backend.Models; // Adjust the namespace according to your project structure

namespace Learnit_Backend.Data // Adjust the namespace according to your project structure
{
    public class LearnitDbContext : DbContext
    {
        public LearnitDbContext(DbContextOptions<LearnitDbContext> options)
            : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }
        public DbSet<Instructor> Instructors { get; set; }
    }
}
