using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Learnit_Backend.Models
{
    public class AddVideo
    {
        // Primary key
        public int Id { get; set; }

        [Column("VideoName")]
        public string? VideoName { get; set; }

        [Column("VideoLink")]
        public string? VideoLink { get; set; }

        [ForeignKey("C_Id")]
        public int C_Id { get; set; }

        public virtual Course? Courses { get; set; }
    }
}
