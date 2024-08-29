import React, { useState } from "react";
import HeaderIn from "../../component/header/headerin";
import Footer from "../../component/footer/footer";
import "./apply.css";

const ApplicationForm = () => {
  const initialApply = JSON.parse(localStorage.getItem("Applys")) || [];
  const [apply, setApply] = useState(initialApply);
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [cv, setCV] = useState(null);

  const Apply = (event) => {
    event.preventDefault(); // Prevent form's default submission behavior

    if (fullname && email && phone && position && cv) {
      const newApply = {
        fullname,
        email,
        phone,
        position,
        cv: cv.name, // Save the file name for display
      };

      const updatedApply = [...apply, newApply];
      setApply(updatedApply);
      localStorage.setItem("Applys", JSON.stringify(updatedApply));

      // Reset form fields
      setFullName("");
      setEmail("");
      setPhone("");
      setPosition("");
      setCV(null);
    } else {
      alert("Please fill all the form fields");
    }
  };

  return (
    <>
      <HeaderIn />
      <div className="JobApplicationForm">
        <form
          onSubmit={Apply}
          action="https://formspree.io/f/mdoqpaqb"
          method="POST"
          className="formapply"
        >
          <div className="apply">
            <label>
              Full Name:
              <input
                type="text"
                name="full-Name"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Position Applied For:
              <input
                type="text"
                name="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Upload CV:
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setCV(e.target.files[0])} // Handle file selection
                required
              />
            </label>
          </div>
          <div>
            <button type="submit" className="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="job-apply">
        <h3>Apply jobs</h3>
        {apply.length > 0 ? (
          apply.map((applys, index) => (
            <div key={index} className="apply">
              <div>
                <h4>{applys.fullname}</h4>
                <p>{applys.email}</p>
                <p>{applys.phone}</p>
                <p>{applys.position}</p>
                <p>{applys.cv}</p>
              </div>
              <div className="pending">
                <p>Pending..</p>
              </div>
            </div>
          ))
        ) : (
          <p>No jobs uploaded yet.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ApplicationForm;
