using System.ComponentModel.DataAnnotations.Schema;

namespace Learnit_Backend.Models // Adjust the namespace according to your project structure
{
    public class Instructor
    {
        // Primary key
        public int Id { get; set; }

        // Column name will be "name" in the database
        [Column("name")]
        public required string Name { get; set; }

        // Column name will be "email" in the database
        [Column("email")]
        public required string Email { get; set; }

        // Column name will be "phone" in the database
        [Column("phone")]
        public required string Phone { get; set; }

        // Column name will be "password" in the database
        [Column("password")]
        public required string Password { get; set; }

        // Other properties...
    }
}
