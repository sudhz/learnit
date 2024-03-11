//using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
 
namespace Learnit_Backend.Models // Adjust the namespace according to your project structure
{
    public class Course
    {
 
        // Primary key
        // [Column("id")]
        public int Id { get; set; }
 
        // Column name will be "name" in the database
        [Column("name")]
        public required string Name { get; set; }
   
        // Foreign key for Instructor
        [ForeignKey("i_id")]
        [Required]
        public int I_id { get; set; }
 
        // Navigation property for Instructor
         public virtual Instructor? Instructors { get; set; }
 
        [Column("c_desc")]
        public string? CDesc { get; set; }
 
       
    }
}