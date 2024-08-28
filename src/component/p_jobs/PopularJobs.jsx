// src/components/PopularJobs.js
import React, { useEffect, useState } from "react";
import "./Popular.css";
import axios from "axios";

function PopularJobs() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState(""); // State for job type
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch jobs
  const fetchJobs = async (searchQuery, searchLocation, searchJobType) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.adzuna.com/v1/api/jobs/us/search/1`,
        {
          params: {
            app_id: "75224839", // Replace with your Adzuna app ID
            app_key: "f3248e47d69caa4007f4f0756d9696dc", // Your API key
            results_per_page: 9, // Number of results per page
            what: searchQuery, // Job title or keyword
            where: searchLocation, // Job location
            full_time: searchJobType === "fulltime" ? 1 : undefined, // Full-time filter
            part_time: searchJobType === "parttime" ? 1 : undefined, // Part-time filter
          },
        }
      );
      setJobs(response.data.results || []);
    } catch (err) {
      console.error("API request failed:", err.response || err.message);
      setError("Failed to fetch jobs.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch default jobs on component mount
  useEffect(() => {
    // Fetch jobs with some default criteria
    fetchJobs("developer", "New York", ""); // Example default criteria
  }, []);

  // Function to handle job search
  const searchJobs = () => {
    fetchJobs(query, location, jobType);
  };
  return (
    <div className="popular-jobs">
      <h2>Popular Job</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="jobs-list">
        {jobs.map((job) => (
          <li key={job.id} className="job-item">
            <div>
              <div className="job-meta">
                <h3>{job.title}</h3>
                <p>{job.company.display_name}</p>
                <div>
                  <p>Location: {job.location.display_name}</p>
                  <p>Salary: {job.salary_max}$</p>
                </div>
              </div>
              <div className="job-actions">
                <button>
                  <a
                    href={job.redirect_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details
                  </a>
                </button>
                <button>
                  <a href="pages/Applly"> Apply</a>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopularJobs;
