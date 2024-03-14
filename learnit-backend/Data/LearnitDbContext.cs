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
        public DbSet<Course> Courses { get; set; }
        public DbSet<Comment> Comments { get; set; }
          protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configuring a one-to-many relationship between Instructor and Course
            modelBuilder.Entity<Instructor>()
                .HasMany(i => i.Courses)
                .WithOne(c => c.Instructors)
                .HasForeignKey(c => c.I_id);
        }
    }
}
