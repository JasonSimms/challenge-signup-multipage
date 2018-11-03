import React from "react";

const Summary = props => {
  return (
    <div className="container summary">
      {/* <p>{JSON.stringify(props.data)}</p> */}
      <h1>Summary:</h1>
      <p>Last Name: {props.data.nameLast}</p>
      <p>First Name: {props.data.nameFirst}</p>
      <p>Email: {props.data.email}</p>
      <p>Phone: {props.data.phone}</p>
      <p>Salary: {props.data.salary}</p>


      <button className="signup">
        Sign Up!
      </button>
      <button className="startover" onClick={() => props.reset()}>
        Start Over
      </button>
    </div>
  );
};

export default Summary;
