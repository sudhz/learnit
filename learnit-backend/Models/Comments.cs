using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Learnit_Backend.Models // Adjust the namespace according to your project structure
{
    public class Comment
    {
        [Key]
        [Column("id")]
        public int CommentId { get; set; }
 
        [Column("comment")]
        public string? CommentText { get; set; }
 
        [Column("course_id")]
        public int CourseId { get; set; }
 
        // Column name will be "student_id" in the database
        // [Column("student_id")]
        // public int StudentId { get; set; }
 
        // // Navigation property for the Course
        // [ForeignKey("CourseId")]
        // public virtual Course? Course { get; set; }
 
        // // Navigation property for the Student
        // [ForeignKey("StudentId")]
        // public virtual Student? Student { get; set; }
 
        // public virtual ICollection<Course>? Courses { get; set; }
 
        // Other properties...
    }
}