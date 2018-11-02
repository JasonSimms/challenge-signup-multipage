import React from "react";

const Summary = props => {
  return (
    <div className="container">
      <h1>Summary:</h1>
      <p>{JSON.stringify(props.data)}</p>
      <button className="button">
        Sign Up!
      </button>
      <button className="button" onClick={() => props.reset()}>
        Start Over
      </button>
    </div>
  );
};

export default Summary;
