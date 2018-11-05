import React from "react";
import FadeIn from "react-fade-in";

const Summary = props => {
  return (
    <div className="input-form">
      <FadeIn>
        {/* <p>{JSON.stringify(props.data)}</p> */}
        <h1>Summary:</h1>
        <p>Last Name: {props.data.nameLast}</p>
        <p>First Name: {props.data.nameFirst}</p>
        <p>Email: {props.data.email}</p>
        <p>Phone: {props.data.phone}</p>
        <p>Salary: {props.data.salary}</p>

        <a href="/">
          <button className="signup">Landing</button>
        </a>
        <button className="startover" onClick={() => props.reset()}>
          Start Over
        </button>
      </FadeIn>
    </div>
  );
};

export default Summary;
