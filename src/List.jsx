import React, { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listJobListings } from './graphql/queries';
import './List.css';


function JobList() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');



  useEffect(() => {
    const loadSchools = async () => {
      try {
        const client = generateClient();
        const result = await client.graphql({
          authMode: 'apiKey',
          query: listJobListings,
        });

        if (result.errors) {
          setError('Something went wrong');
          console.log(result.errors)
        } else {
          const fetchedSchools = result.data.listJobListings.items;
          setJobs(fetchedSchools);
          setFilteredJobs(fetchedSchools);
        }
      } catch (error) {
        setError('Something went real bad');
        console.log(error)
      } finally {
        setLoading(false);
      }
    };

    loadSchools();
  }, []);

  useEffect(() => {
    // Filter schools based on search term
    if (searchTerm.trim() !== '') {
      const filtered = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredJobs(filtered);
    } else {
      setFilteredJobs(jobs);
    }
  }, [searchTerm, jobs]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleString(); // Convert to human-readable format
  };

  return (
    <div className="job-listings-container">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          {jobs.length > 0 && (
            <input
              type="text"
              placeholder="Search by school name"
              value={searchTerm}
              onChange={handleSearch}
            />
          )}
          {filteredJobs.length > 0 ? (
            <div className="job-listings">
              {jobs.map((job) => (
                <div className="job-card" key={job.id}>
                  <h3>{job.title}</h3>
                  <p className="job-details">Company: {job.company}</p>
                  <p className="job-details">Location: {job.location}</p>
                  <p className="job-details">Deadline: {formatDate(job.deadline)}</p>
                  <p className="job-details">Likelihood: {job.likelihood}</p>
                  {job.url && (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apply-button"
                    >
                      Apply
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p>No jobs found</p>
          )}
        </>
      )}
    </div>
  );
}

export default JobList;
