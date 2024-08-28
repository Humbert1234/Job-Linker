import { useState } from "react";
import { Link } from "react-router-dom";
import "./upload.css";
import HiringHeader from "../../../../component/header/headerhiring";
import Footer from "../../../../component/footer/footer";
const Upload = () => {
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

  function deleteJob(index) {
    const updatedJobs = upjobs.filter((_, i) => i !== index);
    setUpJobs(updatedJobs);
    localStorage.setItem("Jobs", JSON.stringify(updatedJobs));
  }

  return (
    <>
      <HiringHeader />
      <div className="Over-content">
        <h2>Upload Your Jobs</h2>
        <div className="form">
          <input
            placeholder="Job Title"
            value={uptitle}
            onChange={(e) => setUpTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={updescription}
            onChange={(e) => setUpDST(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            value={uplocation}
            onChange={(e) => setUpLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Salary"
            value={upsalary}
            onChange={(e) => setUpSalary(e.target.value)}
          />
          <select
            value={upjobType}
            onChange={(e) => setUpJobType(e.target.value)}
          >
            <option value="">Select Job Type</option>
            <option value="fulltime">Full-time</option>
            <option value="parttime">Part-time</option>
          </select>
          <button className="button" onClick={UploadJob}>
            Submit
          </button>
        </div>
      </div>

      <div className="job-list">
        <h3>Uploaded Jobs</h3>
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
                  <li className="delete" onClick={() => deleteJob(index)}>
                    Delete
                  </li>
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
      <Footer />
    </>
  );
};

export default Upload;
