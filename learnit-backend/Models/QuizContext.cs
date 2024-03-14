//using Microsoft.EntityFrameworkCore;
//using System.ComponentModel.DataAnnotations.Schema;

//namespace Learnit_Backend.Models
//{

//    public class QuizContext
//    {
//        public int Id { get; set; }

//        [Column("Text")]
//        public string? Text { get; set; }

//        public virtual ICollection<Answer>? Answers { get; set; }
//    }


//}


using Microsoft.EntityFrameworkCore;
using Learnit_Backend.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace Learnit_Backend.Models
{
    public class QuizContext : DbContext
    {
          public int Id { get; set; }

        [Column("Text")]
        public string? Text { get; set; }
        public QuizContext(DbContextOptions<QuizContext> options) : base(options)
        {
        }

        public DbSet<QuizContext> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }
        
    }
}
