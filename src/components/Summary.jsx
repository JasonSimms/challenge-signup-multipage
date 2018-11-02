import React from "react";

const Summary = props => {
  return (
    <div className="container">
      <h1>Summary:</h1>
      <p>{JSON.stringify(props.data)}</p>
      <button className="button" onClick={() => this.props.sign("up")}>
        Sign Up!
      </button>
      <button className="button" onClick={() => this.props.sign("clear")}>
        Start Over
      </button>
    </div>
  );
};

export default Summary;
