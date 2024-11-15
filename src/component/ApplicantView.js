import React, { useState, useEffect } from 'react';
import './RoleBasedView.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';

const ApplicantView = ({ handleview }) => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const jobsCollection = collection(db, "jobs");
    const jobSnapshot = await getDocs(jobsCollection);
    const jobList = jobSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setJobs(jobList);
  };

  useEffect(() => {
    fetchJobs();
  }, []);


  const filteredJobs = jobs.filter(job =>
    job.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleJobDetails = (jobId) => {
    setSelectedJob(selectedJob === jobId ? null : jobId);
  };

  const payment = () => {
    handleview('payment')
  }

  return (
    <div className="job-listing-container">
      <aside className='recruit' id='recruit'>
       <button className='recruit-btn' onClick={payment}> 
        Post a job
       </button>
      </aside>
      <main className="jobs-display">
        <h2>Posted Jobs</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className='All-cards'>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-card-header">
                  <div>
                    <h3>{job.name}</h3>
                    <p className="job-location">{job.location}</p>
                    <p className="job-date">Posted: {job.datePosted}</p>
                  </div>
                  <span className="status-badge">{job.status}</span>
                </div>

                <button
                  onClick={() => toggleJobDetails(job.id)}
                  className="details-button"
                >
                  {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                </button>

                {selectedJob === job.id && (
                  <div className="job-details">
                    <div className="details-grid">
                      <div>
                        <p className="detail-label">Salary Range:</p>
                        <p>{job.salary || 'Not specified'}</p>
                      </div>
                      <div>
                        <p className="detail-label">Employment Type:</p>
                        <p>{job.employmentType}</p>
                      </div>
                      <div>
                        <p className="detail-label">Link to apply:</p>
                        <p>{job.application}</p>
                      </div>
                    </div>

                    <div className="detail-section">
                      <p className="detail-label">Description:</p>
                      <p>{job.description || 'Not specified'}</p>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No jobs found.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default ApplicantView;