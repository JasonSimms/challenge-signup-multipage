import React from "react";

const Landing = props => {
  return (
    <div className="input-container">
      <div className="input-form">
        <h1>Welcome!</h1>
        <h2>A Registration Form by Jason Simms</h2>
        <a href="/signup">
          <button className="signup">SIGN UP!</button>
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
        <div className="flex-container">

        <a href="https://github.com/JasonSimms/challenge-signup-multipage">
          <img className="link-icon" src="githubico.png" alt="Github Icon" />
          <p>Github</p>
        </a>
        <br />
        <a href="https://www.linkedin.com/in/jason-simms/">
          <img className="link-icon" src="linkedin.ico" alt="LinkedIn" />
          <p>Linkedin</p>
        </a>
        <br />
        <a href="https://jasonsimms.github.io/Type-Attack/">
          <img className="link-icon" src="benderico.png" alt="TypeAttk" />
          <p>Play my Typing Game!</p>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
