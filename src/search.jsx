import React, { useState, useEffect } from 'react';
import './search.css'; // Import the CSS file for styling

const Search = ({ jobs }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredJobs, setFilteredJobs] = useState(jobs);

    // Update filtered jobs when searchTerm changes
    useEffect(() => {
        if (searchTerm) {
            const results = jobs.filter(job =>
                job.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredJobs(results);
        } else {
            setFilteredJobs(jobs); 
        }
    }, [searchTerm, jobs]);

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search for jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <div className="job-list">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job, index) => (
                        <div key={index} className="job-item">
                            <h3>{job.title}</h3>
                            <p>{job.company}</p>
                            <p>{job.location}</p>
                        </div>
                    ))
                ) : (
                    <p>No jobs found.</p>
                )}
            </div>
        </div>
    );
};

export default Search;
