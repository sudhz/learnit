using System.ComponentModel.DataAnnotations.Schema;

namespace Learnit_Backend.Models // Adjust the namespace according to your project structure
{
    public class Student
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
        public string? Phone { get; set; }

        // Column name will be "college" in the database
        [Column("college")]
        public string? College { get; set; }

        // Column name will be "password" in the database
        [Column("password")]
        public required string Password { get; set; }

        // Other properties...
    }
}
