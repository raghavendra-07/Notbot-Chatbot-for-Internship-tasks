import React, { useState } from "react";

const InternshipApplication = () => {
  const [isApplying, setIsApplying] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState(null);
  const [uniqueID, setUniqueID] = useState(null);

  const handleApply = (apply) => {
    setIsApplying(apply);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setExperience(parseInt(event.target.value));
  };

  const generateUniqueID = () => {
    const uniqueID = Math.floor(Math.random() * 1000000);
    setUniqueID(uniqueID);
  };

  const handleSubmit = () => {
    // Save data in DB here (you can use API calls or other methods)
    generateUniqueID();
  };

  return (
    <div>
      {isApplying === null && (
        <div>
          <p>Are you here to apply for the Internship?</p>
          <button onClick={() => handleApply(true)}>Yes</button>
          <button onClick={() => handleApply(false)}>No</button>
        </div>
      )}

      {isApplying === true && uniqueID === null && (
        <div>
          <p>Please enter your Name:</p>
          <input type="text" value={name} onChange={handleNameChange} />
          <br />
          <p>Please enter your email ID:</p>
          <input type="text" value={email} onChange={handleEmailChange} />
          <br />
          <p>
            Please select how many years of experience you have with
            Python/JS/Automation Development:
          </p>
          <select value={experience} onChange={handleExperienceChange}>
            <option value={null}>Select years of experience</option>
            <option value={1}>1 year</option>
            <option value={2}>2 years</option>
            <option value={3}>3 years</option>
            <option value={4}>4 years</option>
            <option value={5}>5 years</option>
          </select>
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}

      {uniqueID !== null && (
        <div>
          <p>Thanks for connecting. We will get back to you shortly.</p>
          <p>Your unique ID for this chat session: {uniqueID}</p>
        </div>
      )}
    </div>
  );
};

export default InternshipApplication;
