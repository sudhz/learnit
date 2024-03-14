using Microsoft.EntityFrameworkCore;
using Learnit_Backend.Models;
using Learnit_Backend.Controllers; // Adjust the namespace according to your project structure

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
        public DbSet<Course> Courses { get; set; }
<<<<<<< Updated upstream
          protected override void OnModelCreating(ModelBuilder modelBuilder)
=======
        public DbSet<Comment> Comment { get; set; }
        public DbSet<Course_Student_Mapping> Course_student_mappings { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
>>>>>>> Stashed changes
        {
            // Configuring a one-to-many relationship between Instructor and Course
            modelBuilder.Entity<Instructor>()
                .HasMany(i => i.Courses)
                .WithOne(c => c.Instructors)
                .HasForeignKey(c => c.I_id);
        }
    }
}
