import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Jobs() {
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

  const initialJobs = JSON.parse(localStorage.getItem("Jobs")) || [];

  const [upjobs, setUpJobs] = useState(initialJobs);
  const [uptitle, setUpTitle] = useState("");
  const [updescription, setUpDST] = useState("");
  const [uplocation, setUpLocation] = useState("");
  const [upsalary, setUpSalary] = useState("");
  const [upjobType, setUpJobType] = useState("");

  function UploadJob() {
    if (uptitle && updescription && uplocation && upsalary && upjobType) {
      const newJob = {
        uptitle,
        updescription,
        uplocation,
        upsalary,
        upjobType,
      };

      const updatedJobs = [...upjobs, newJob];
      setUpJobs(updatedJobs);
      localStorage.setItem("Jobs", JSON.stringify(updatedJobs));

      setUpTitle("");
      setUpDST("");
      setUpLocation("");
      setUpSalary("");
      setUpJobType("");
    } else {
      alert("Please fill all the form fields");
    }
  }
  return (
    <>
      <div className="Job">
        <div className="JOB">
          <h1>JOBSEEKER</h1>
          <p>Search millions of jobs for free</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eum?
          </p>
          <div className="form1">
            <input
              placeholder="Search jobs"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="fulltime">Full-time</option>
              <option value="parttime">Part-time</option>
            </select>
            <button onClick={searchJobs} className="btn11">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
      <section className="body">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ul className="job">
          {jobs.map((job) => (
            <li key={job.id}>
              <div>
                <h3>{job.title}</h3>
                <p>{job.company.display_name}</p>
                <p>Location: {job.location.display_name}</p>
                <p>Salary: {job.salary_max}$</p>
              </div>
              <div className="btn33">
                <a
                  className="redirect"
                  href={job.redirect_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Details
                </a>
                <Link to="/apply">
                  <li className="apply">Apply</li>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <div className="job-list">
        <ul className="job">
          {upjobs.length > 0 ? (
            upjobs.map((job, index) => (
              <li key={index}>
                <div>
                  <h4>{job.uptitle}</h4>
                  <p>{job.updescription}</p>
                  <p>{job.uplocation}</p>
                  <p>{job.upsalary}</p>
                  <p>{job.upjobType}</p>
                </div>
                <div className="btn33">
                  <li className="delete">Details</li>
                  <Link to="/apply">
                    <li className="apply">Apply</li>
                  </Link>
                </div>
              </li>
            ))
          ) : (
            <p>No jobs uploaded yet.</p>
          )}
        </ul>
      </div>
    </>
  );
}
export default Jobs;
