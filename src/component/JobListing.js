import React, { useState } from 'react';
import plus from './plus.png';


function JobListing() {
  const [ShowForm, setShowForm] = useState(false)
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    jobName: '',
    jobDescription: '',
    salary: '',
    location: '',
    employmentType: 'Full-time',
    experience: '',
    qualifications: '',
    responsibilities: '',
    benefits: '',
    deadline: '',
    workSchedule: '',
    department: '',
    reportingTo: '',
    remote: 'No'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addJob = () => {
    const newJob = {
      id: Date.now(),
      name: formData.jobName,
      description: formData.jobDescription,
      status: 'Hiring',
      salary: formData.salary,
      location: formData.location,
      employmentType: formData.employmentType,
      experience: formData.experience,
      qualifications: formData.qualifications,
      responsibilities: formData.responsibilities,
      benefits: formData.benefits,
      deadline: formData.deadline,
      workSchedule: formData.workSchedule,
      department: formData.department,
      reportingTo: formData.reportingTo,
      remote: formData.remote,
      datePosted: new Date().toISOString().split('T')[0]
    };

    setJobs(prevJobs => [...prevJobs, newJob]);
    resetForm();
    form()
  };

  const resetForm = () => {
    setFormData({
      jobName: '',
      jobDescription: '',
      salary: '',
      location: '',
      employmentType: 'Full-time',
      experience: '',
      qualifications: '',
      responsibilities: '',
      benefits: '',
      deadline: '',
      workSchedule: '',
      department: '',
      reportingTo: '',
      remote: 'No'
    });
  };

  const toggleJobDetails = (jobId) => {
    setSelectedJob(selectedJob === jobId ? null : jobId);
  };

  const form = () => {
    setShowForm(!ShowForm)
  }

  return (
    <div className="job-listing-container">
      {!ShowForm && (<button onClick={form} className='add-job-button'><img src={plus} alt='Plus icon' height={16} width={16} /></button>)}
      {ShowForm && (
        <aside className="job-form-container">
          <h2>Add New Job</h2>
          <form className="job-form">
            <div className="form-group">
              <label>Job Title</label>
              <input
                type="text"
                name="jobName"
                value={formData.jobName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Job Description</label>
              <textarea
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Salary Range</label>
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  placeholder="e.g., $50,000 - $70,000"
                />
              </div>

              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Employment Type</label>
                <select
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleInputChange}
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Temporary">Temporary</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div className="form-group">
                <label>Remote Work</label>
                <select
                  name="remote"
                  value={formData.remote}
                  onChange={handleInputChange}
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Required Experience</label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="e.g., 3+ years"
              />
            </div>

            <div className="form-group">
              <label>Qualifications</label>
              <textarea
                name="qualifications"
                value={formData.qualifications}
                onChange={handleInputChange}
                placeholder="Required qualifications and skills"
              />
            </div>

            <div className="form-group">
              <label>Responsibilities</label>
              <textarea
                name="responsibilities"
                value={formData.responsibilities}
                onChange={handleInputChange}
                placeholder="Key job responsibilities"
              />
            </div>

            <div className="form-group">
              <label>Benefits</label>
              <textarea
                name="benefits"
                value={formData.benefits}
                onChange={handleInputChange}
                placeholder="e.g., Health insurance, 401(k), etc."
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Application Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Work Schedule</label>
                <input
                  type="text"
                  name="workSchedule"
                  value={formData.workSchedule}
                  onChange={handleInputChange}
                  placeholder="e.g., Mon-Fri, 9-5"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Reporting To</label>
                <input
                  type="text"
                  name="reportingTo"
                  value={formData.reportingTo}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <button type="button" onClick={addJob} className="submit-button">
              Add Job
            </button>
          </form>
        </aside>
      )}

      <main className="jobs-display">
        <h2>Posted Jobs</h2>
        {jobs.map((job) => (
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
                  <p>{job.description}</p>
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
        ))}
      </main>
    </div>
  );
}

export default JobListing;