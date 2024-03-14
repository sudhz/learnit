// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
// using System.Linq;
// using System.Threading.Tasks;
// using Learnit_Backend.Models;

// namespace Learnit_Backend.Controllers
// {
//     [Route("api/[controller]")]
//     [ApiController]
//     public class QuizController : ControllerBase
//     {
//         private readonly QuizContext _context;

//         public QuizController(QuizContext context)
//         {
//             _context = context;
//         }

//         // GET: api/Quiz
//         [HttpGet]
//         public async Task<ActionResult<IEnumerable<QuizContext>>> GetQuestions()
//         {
//             return await _context.Questions.Include(q => q.Answers).ToListAsync();
//         }

//         // POST: api/Quiz/Evaluate
//         // [HttpPost("Evaluate")]
//         // public async Task<ActionResult<int>> EvaluateAnswers(int[] answerIds)
//         // {
//         //     var correctAnswers = await _context.Answers
//         //         .Where(a => answerIds.Contains(a.Id) && (a.IsCorrect==1))
//         //         .CountAsync();

//         //     return correctAnswers;
//         // }

//         // POST: api/Quiz/Evaluate
// // POST: api/Quiz/Evaluate
// [HttpPost("Evaluate")]
// public async Task<ActionResult<int>> EvaluateAnswers(int[] answerIds)
// {
//     if (answerIds == null)
//     {
//         return BadRequest("Answer IDs cannot be null.");
//     }

//     var correctAnswers = await _context.Answers
//         .Where(a => answerIds.Contains(a.Id) && a.IsCorrect.HasValue && a.IsCorrect.Value == 1)
//         .ToListAsync(); // Convert to list asynchronously

//     return correctAnswers.Count; // Use Count on IEnumerable<T>
// }


//     }
// }




using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using Learnit_Backend.Models;

namespace Learnit_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuizController : ControllerBase
    {
        private readonly QuizContext _context;

        public QuizController(QuizContext context)
        {
            _context = context;
        }

        // GET: api/Quiz
        [HttpGet]
        public async Task<ActionResult<IEnumerable<QuizContext>>> GetQuestions()
        {
            return await _context.Questions.Include(q => q.Answers).ToListAsync();
        }

        // POST: api/Quiz/Evaluate
        [HttpPost("Evaluate")]
        public async Task<ActionResult<int>> EvaluateAnswers(int[] answerIds)
        {
            if (answerIds == null || !answerIds.Any())
            {
                return BadRequest("Answer IDs cannot be null or empty.");
            }

            var correctAnswersCount = await _context.Answers
                .CountAsync(a => answerIds.Contains(a.Id) && a.IsCorrect == 1);

            return correctAnswersCount;
        }
    }
}
