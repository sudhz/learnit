using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Learnit_Backend.Models
{
    public class Course_Student_Mapping
    {
        // Primary key
        [Key]
        [Column(Order = 0)]
        public int C_Id { get; set; }

        // Foreign key for Course
        [ForeignKey("C_Id")]
        public virtual Course? Courses { get; set; }

        // Primary key
        [Key]
        [Column(Order = 1)]
        public int S_Id { get; set; }

        // Foreign key for Student
        [ForeignKey("S_Id")]
        public virtual Student? Students { get; set; }
    }
}