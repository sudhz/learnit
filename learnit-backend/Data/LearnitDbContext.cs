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
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Course_Student_Mapping> Course_student_mappings { get; set; }

        // public DbSet<Comment> Comment { get; set; }
        public DbSet<AddVideo> AddVideo { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configuring a one-to-many relationship between Instructor and Course
            modelBuilder.Entity<Instructor>()
                .HasMany(i => i.Courses)
                .WithOne(c => c.Instructors)
                .HasForeignKey(c => c.I_id);

            modelBuilder.Entity<Course_Student_Mapping>()
                .HasKey(mapping => new { mapping.C_Id, mapping.S_Id });



             modelBuilder.Entity<Course>()
                .HasMany(i => i.AddVideos)
                .WithOne(c => c.Courses)
                .HasForeignKey(c => c.C_Id);

        }
    }
}
