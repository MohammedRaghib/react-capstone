import React, { useState } from 'react';
import './RoleBasedView.css';

const AdminView = () => {
  const [jobs, setJobs] = useState([
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
    }
  ]);
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
    remote: 'No',
  });

  const handleEditClick = (job) => {
    setSelectedJob(job.id);
    setFormData({
      jobName: job.name,
      jobDescription: job.description || '',
      salary: job.salary,
      location: job.location,
      employmentType: job.employmentType,
      experience: job.experience,
      qualifications: job.qualifications,
      responsibilities: job.responsibilities,
      benefits: job.benefits,
      deadline: job.deadline,
      workSchedule: job.workSchedule,
      department: job.department,
      reportingTo: job.reportingTo,
      remote: job.remote,
    });
  };

  const handleDeleteClick = (jobId) => {
    setJobs(jobs.filter(job => job.id !== jobId));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setJobs(prevJobs => prevJobs.map(job =>
      job.id === selectedJob ? { ...job, ...formData, name: formData.jobName } : job
    ));
    setSelectedJob(null);
  };

  return (
    <div className="role-view admin-view">
      <h2>Admin View - Job Management</h2>
      <div className="jobs-display">
        <h3>All Jobs</h3>
        <div className='All-cards'>
          {jobs.map(job => (
            <div key={job.id} className="job-card">
              <div className="job-card-header">
                <div>
                  <h3>{job.name}</h3>
                  <p className="job-location">{job.location}</p>
                  <p className="job-date">Posted: {job.datePosted}</p>
                </div>
                <span className="status-badge">{job.status}</span>
              </div>

              <button onClick={() => handleEditClick(job)} className="edit-button">
                Edit
              </button>
              <button onClick={() => handleDeleteClick(job.id)} className="delete-button">
                Delete
              </button>

              {selectedJob === job.id && (
                <div className="job-edit-form">
                  <h4>Edit Job - {job.name}</h4>
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
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Location</label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <button type="button" onClick={handleSave} className="save-button">
                      Save Changes
                    </button>
                  </form>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminView;
