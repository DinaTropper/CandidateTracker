using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using reactCandidateTracker.Data;

namespace reactCandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatesController : ControllerBase
    {
        private readonly string _connectionString;

        public CandidatesController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet("getpending")]
        public List<Candidate> GetPending()
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetPending();
        }
        [Route("getconfirmed")]
        public List<Candidate> GetConfirmed()
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetConfirmed();
        }
        [Route("getrejected")]
        public List<Candidate> GetRejected()
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetRejected();
        }
        [HttpPost("addcandidate")]
        public void AddCandidate(Candidate c)
        {
            var repo = new CandidateRepo(_connectionString);
            repo.AddCandidate(c);
        }
        [HttpPost("updatestatus")]
        public void UpdateStatus(Candidate c)
        {
            var repo = new CandidateRepo(_connectionString);
            repo.UpdateStatus(c);
        }
      
        [Route("getconfirmedcount")]
        public int GetConfirmedCount()
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetConfirmedCount();
        }
        [Route("getrejectedcount")]
        public int GetRejectedCount()
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetRejectedCount();
        }
        [Route("getpendingcount")]
        public int GetPendingCount()
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetPendingCount();
        }
        [Route("getbyid")]
        public Candidate GetById(int id)
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetCandidate(id);
        }
    }
}
