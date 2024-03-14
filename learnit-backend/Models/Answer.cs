using System.ComponentModel.DataAnnotations.Schema;

namespace Learnit_Backend.Models
{
    public class Answer
    {
        public int Id { get; set; }
        [Column("Text")]
        public string? Text { get; set; }
        [Column("IsCorrect")]
        public int ? IsCorrect { get; set; }
        
        [ForeignKey("QuestionId")]
        public int QuestionId { get; set; }
        public virtual QuizContext? QuizContexts { get; set; }
        
    }
}
