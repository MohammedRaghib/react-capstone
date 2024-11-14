import React, { useState, useEffect } from 'react';
import './RoleBasedView.css';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from '../../firebase';

const AdminView = () => {
  const [showForm, setShowForm] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    jobName: '',
    jobDescription: '',
    jobApplication: '',
    salary: '',
    location: '',
    employmentType: 'Full-time',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [editingJobId, setEditingJobId] = useState(null);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addJob = async () => {
    const newJob = {
      name: formData.jobName,
      description: formData.jobDescription,
      application: formData.jobApplication,
      status: 'Hiring',
      salary: formData.salary,
      location: formData.location,
      employmentType: formData.employmentType,
      datePosted: new Date().toISOString().split('T')[0]
    };

    try {
      if (editingJobId) {
        const docRef = await updateDoc(collection(db, 'jobs'), editingJobId);
        console.log('Edited job with ID:' + docRef.id)
      }
      const docRef = await addDoc(collection(db, "jobs"), newJob);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    fetchJobs();
    resetForm();
    toggleForm();
    setEditingJobId(null);
  };

  const editJob = (job) => {
    setFormData({
      jobName: job.name,
      jobDescription: job.description,
      jobApplication: job.application,
      salary: job.salary,
      location: job.location,
      employmentType: job.employmentType
    });

    setEditingJobId(job.id);
    setShowForm(true);
  }

  const deleteJob = async (jobId) => {
    try {
      const jobDocRef = doc(db, "jobs", jobId);
      await deleteDoc(jobDocRef);
      console.log("Job deleted with ID: ", jobId);
      fetchJobs(); // Refresh the list
    } catch (e) {
      console.error("Error deleting job: ", e);
    }
  };



  const resetForm = () => {
    setFormData({
      jobName: '',
      jobDescription: '',
      jobApplication: '',
      salary: '',
      location: '',
      employmentType: 'Full-time',
    });
  };

  const toggleJobDetails = (jobId) => {
    setSelectedJob(selectedJob === jobId ? null : jobId);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="job-listing-container">
      {!showForm && (
        <button onClick={toggleForm} className='add-job-button'>
          {editingJobId ? '✅' : '➕'}
        </button>
      )}
      {showForm && (
        <aside className="job-form-container">
          <h2>{editingJobId ? 'Edit Job' : 'Add Job'}</h2>
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

            <div className="form-group">
              <label>Job Application Link</label>
              <textarea
                name="jobApplication"
                value={formData.jobApplication}
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

            <button type="button" onClick={addJob} className="submit-button">
              {editingJobId ? 'Save Changes' : 'Add Job'}
            </button>
          </form>
        </aside>
      )}

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
                        <p className='info'>{job.salary || 'Not specified'}</p>
                      </div>
                      <div>
                        <p className="detail-label">Employment Type:</p>
                        <p className='info'>{job.employmentType}</p>
                      </div>
                      <div>
                        <p className="detail-label">Link to apply:</p>
                        <p className='info'>{job.application}</p>
                      </div>
                    </div>

                    <div className="detail-section">
                      <p className="detail-label">Description:</p>
                      <p className='info'>{job.description || 'Not specified'}</p>
                    </div>
                  </div>
                )}

                <button onClick={() => editJob(job)} className="edit-button">Edit</button>
                <button onClick={() => deleteJob(job.id)} className="delete-button">Delete</button>
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

export default AdminView;