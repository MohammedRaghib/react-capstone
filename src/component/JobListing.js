import React, { useState } from 'react';

function JobListing() {
  const [jobs, setJobs] = useState([]);
  const [jobName, setJobName] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const AddJob = () => {
    const newJob = {
      Id: Date.now(),
      name: jobName,
      description: jobDescription,
      status: 'Hiring',
    };

    setJobs((prevJobs) => [...prevJobs, newJob]);

    setJobName('');
    setJobDescription('');
  };

  return (
    <>
      <aside className='addjob'>
        <form className='newJob'>
          <label>Job Name</label>
          <br />
          <input
            type='text'
            id='Jobtitle'
            placeholder='Job Title'
            onChange={(e) => setJobName(e.target.value)}
            required
          />
          <br />
          <br />
          <label>Job Description</label>
          <br />
          <textarea
            placeholder='Job Description'
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </form>
        <button onClick={AddJob}>Add Job</button>
      </aside>
      <main className='Jobs-display'>
        {jobs.map((job) => (
          <div key={job.Id}>
            <p>{job.name}</p>
            <p>{job.description}</p>
            <p>{job.status}</p>
          </div>
        ))}
      </main>
    </>
  );
}

export default JobListing;