// src/components/RoleBasedView/ApplicantView.js
import React, { useState } from 'react';
import './RoleBasedView.css';

const ApplicantView = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const jobs = [
    {
      id: 1,
      name: 'Software Engineer',
      location: 'Remote',
      datePosted: '2023-10-01',
      status: 'Hiring',
      salary: '$80,000 - $100,000',
      employmentType: 'Full-time',
      experience: '3+ years',
      qualifications: 'Bachelor’s degree in Computer Science',
      responsibilities: 'Develop and maintain web applications',
      benefits: 'Health insurance, 401(k)',
      workSchedule: 'Mon-Fri, 9-5',
      department: 'Engineering',
      reportingTo: 'Engineering Manager',
      remote: 'Yes',
      deadline: '2023-12-31',
    },
    {
      id: 2,
      name: 'Product Manager',
      location: 'New York, NY',
      datePosted: '2023-09-15',
      status: 'Hiring',
      salary: '$90,000 - $120,000',
      employmentType: 'Full-time',
      experience: '5+ years',
      qualifications: 'Experience in product management',
      responsibilities: 'Lead product development and strategy',
      benefits: 'Health insurance, stock options',
      workSchedule: 'Mon-Fri, 10-6',
      department: 'Product',
      reportingTo: 'Director of Product',
      remote: 'No',
      deadline: '2023-11-30',
    },
    {
      id: 3,
      name: 'UX Designer',
      location: 'San Francisco, CA',
      datePosted: '2023-08-20',
      status: 'Hiring',
      salary: '$70,000 - $90,000',
      employmentType: 'Part-time',
      experience: '2+ years',
      qualifications: 'Proficient in design tools',
      responsibilities: 'Design user experiences for web applications',
      benefits: 'Flexible hours, remote work options',
      workSchedule: 'Part-time, flexible',
      department: 'Design',
      reportingTo: 'Design Lead',
      remote: 'Yes',
      deadline: '2023-12-15',
    },
  ];

  const filteredJobs = jobs.filter(job =>
    job.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleJobDetails = (jobId) => {
    setSelectedJob(selectedJob === jobId ? null : jobId);
  };

  return (
    <div className="job-listing-container">
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
                    </div>

                    <div className="detail-section">
                      <p className="detail-label">Description:</p>
                      <p>{job.description || 'Not specified'}</p>
                    </div>

                    <div className="detail-section">
                      <p className="detail-label">Required Experience:</p>
                      <p>{job.experience || 'Not specified'}</p>
                    </div>

                    <div className="detail-section">
                      <p className="detail-label">Qualifications:</p>
                      <p>{job.qualifications || 'Not specified'}</p>
                    </div>

                    <div className="detail-section">
                      <p className="detail-label">Responsibilities:</p>
                      <p>{job.responsibilities || 'Not specified'}</p>
                    </div>

                    <div className="detail-section">
                      <p className="detail-label">Benefits:</p>
                      <p>{job.benefits || 'Not specified'}</p>
                    </div>

                    <div className="details-grid">
                      <div>
                        <p className="detail-label">Work Schedule:</p>
                        <p>{job.workSchedule || 'Not specified'}</p>
                      </div>
                      <div>
                        <p className="detail-label">Remote Work:</p>
                        <p>{job.remote}</p>
                      </div>
                    </div>

                    <div className="details-grid">
                      <div>
                        <p className="detail-label">Department:</p>
                        <p>{job.department || 'Not specified'}</p>
                      </div>
                      <div>
                        <p className="detail-label">Reporting To:</p>
                        <p>{job.reportingTo || 'Not specified'}</p>
                      </div>
                    </div>

                    <div className="detail-section">
                      <p className="detail-label">Application Deadline:</p>
                      <p>{job.deadline || 'Not specified'}</p>
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