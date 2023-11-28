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

  function getLikelihoodColor(likelihood) {
    if (likelihood >= 0.66) {
      return '#09BC69';
    } else if (likelihood >= 0.33) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

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
        setError('Something went wrong');
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
                  placeholder="Search by job title"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="search-input"
                />
              )}
              {filteredJobs.length > 0 ? (
                <div className="job-listings">
                  {filteredJobs.map((job) => (
                    <div className="job-card" key={job.id}>
                      <div className="likelihood-section" style={{ color: getLikelihoodColor(job.likelihood) }}>
                        <p className="likelihood-text">{`${(job.likelihood * 100).toFixed(0)}%`}</p>
                        <p className="likelihood-desc">likelihood of visa sponsorship</p>
                      </div>
                      <div className="middle-section">
                        <h3>{job.title}</h3>
                        <p>{job.company}</p>
                        {job.description && <p>{job.description}</p>}
                      </div>
                      <div className="apply-section">
                        {job.url && job.url.startsWith('http') && (
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="apply-button"
                            style={{ backgroundColor: '#29152e', color: 'white' }}
                          >
                            Apply
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No jobs found</p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default JobList;
