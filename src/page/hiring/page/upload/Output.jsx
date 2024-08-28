function Output() {
  <div className="job-list">
    <h3>Uploaded Jobs</h3>
    {jobs.length > 0 ? (
      jobs.map((job, index) => (
        <div key={index} className="job">
          <h4>{job.title}</h4>
          <p>{job.description}</p>
          <p>{job.location}</p>
          <p>{job.salary}</p>
          <p>{job.jobType}</p>
          <button onClick={() => deleteJob(index)}>Delete</button>
        </div>
      ))
    ) : (
      <p>No jobs uploaded yet.</p>
    )}
  </div>;
}
export default Output;
