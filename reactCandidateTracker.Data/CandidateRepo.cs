using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace reactCandidateTracker.Data
{
    public class CandidateRepo
    {
        private readonly string _connectionString;
        public CandidateRepo(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void UpdateStatus(Candidate c)
        {
            var context = new CandidatesDataContext(_connectionString);
            context.Update(c);
            context.SaveChanges();
        }
        public void AddCandidate(Candidate c)
        {
            var context = new CandidatesDataContext(_connectionString);
            c.Status = Status.Pending;
            context.Candidates.Add(c);
            context.SaveChanges();
        }
        public List<Candidate> GetConfirmed()
        {
            var context = new CandidatesDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Confirmed).ToList();
        }
        public List<Candidate> GetRejected()
        {
            var context = new CandidatesDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Rejected).ToList();
        }
        public List<Candidate> GetPending()
        {
            var context = new CandidatesDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Pending).ToList();
        }

        public int GetConfirmedCount()
        {
            var context = new CandidatesDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Confirmed).Count();
        }
        public int GetRejectedCount()
        {
            var context = new CandidatesDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Rejected).Count();
        }
        public int GetPendingCount()
        {
            var context = new CandidatesDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == Status.Pending).Count();
        }

        public Candidate GetCandidate(int id)
        {
            var context = new CandidatesDataContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }

    }
}
