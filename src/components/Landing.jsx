import React from "react";

const Landing = props => {
  return (
    <div className="input-container">
    <div className="input-form">

      <h1>Welcome!</h1>
      <h2>A Registration Form by Jason Simms</h2>
      <a href="/signup">
      <button className="signup" autofocus="true">
      SIGN UP!
      </button>
     </a>

      <h3>This Application form includes:</h3>
      <ul>
        <li>Name</li>
        <li>Email</li>
        <li>Phone</li>
        <li>Income</li>
        <li>A summary of inputs for review</li>
        <li>Progress Bar</li>
      </ul>
<h3>Features:</h3>
      <ul>
          <li>Input Validation Using REGEX</li>
          <li>ReactJS state controls</li>
      </ul>
    </div>
    </div>
  );
};

export default Landing;
