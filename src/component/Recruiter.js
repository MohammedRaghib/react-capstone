import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

function Recruiter() {
    const [token, setToken] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        jobName: '',
        jobDescription: '',
        jobApplication: '',
        location: '',
        salary: '',
        employmentType: 'Full-time'
    });

    useEffect(() => {
        fetchJobs();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const fetchJobs = async () => {
        const jobsCollection = await getDocs(collection(db, 'jobs'));
        const jobMap = jobsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setJobs(jobMap);
    };

    const filteredJobs = jobs.filter((job) => job.id === token);

    const addJob = async () => {
        const newJob = {
            name: formData.jobName,
            description: formData.jobDescription,
            application: formData.jobApplication,
            salary: formData.salary,
            location: formData.location,
            status: 'Hiring'
        };

        const docRef = await addDoc(collection(db, 'jobs'), newJob);
        console.log("Job Posted: " + docRef.id);
        alert('Here is your token. DON\'T share it with anyone: ' + docRef.id);
    };

    return (
        <>
            <section>
                {!showForm && (
                    <aside>
                        <button className='job-form-btn' onClick={() => { setShowForm(!showForm) }}>➕</button>
                    </aside>
                )}
                {showForm && (
                    <div className='form-container'>
                        <div className='section-input'>
                            <label>Job Name:</label>
                            <br />
                            <input
                                name='jobName'
                                type='text'
                                value={formData.jobName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='section-input'>
                            <label>Job Description:</label>
                            <br />
                            <textarea
                                name='jobDescription'
                                type='text'
                                value={formData.jobDescription}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='section-input'>
                            <label>Job Location:</label>
                            <br />
                            <input
                                name='location'
                                type='text'
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='section-input'>
                            <label>Job Application:</label>
                            <br />
                            <input
                                name='jobApplication'
                                type='text'
                                value={formData.jobApplication}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='section-input'>
                            <label>Salary:</label>
                            <br />
                            <input
                                name='salary'
                                type='text'
                                value={formData.salary}
                                onChange={handleChange}
                                placeholder='E.g: $50K - $70K'
                                required
                            />
                        </div>
                        <div className='section-input'>
                            <label>Employment Type:</label>
                            <br />
                            <select
                                name='employmentType'
                                type='text'
                                value={formData.employmentType}
                                onChange={handleChange}
                                required
                            >
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Contract">Contract</option>
                                <option value="Temporary">Temporary</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>
                        <div>
                            <button className='addJobbtn' onClick={addJob}>Add Job</button>
                        </div>
                    </div>
                )}
            </section>
            <input type='text' value={token} onChange={(e) => setToken(e.target.value)} />
            {filteredJobs.length > 0 &&
                filteredJobs.map((job) => {
                    return (
                        <div key={job.id} className='All-jobs'>
                            <div className='job-title' style={{ color: 'white' }}>{job.name}</div>
                            <div className='job-title'>{job.description}</div>
                        </div>
                    );
                })
            }
        </>
    );
}

export default Recruiter;