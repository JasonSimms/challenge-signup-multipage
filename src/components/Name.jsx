import React, { Component } from "react";

class Name extends Component {
  render() {
    return (
      <div className="input-form">
        <h1>Just A Few Questions To Get Us Started...</h1>
        <p className="input-title">First Name:</p>
        <input
          type="name"
          value={this.props.target}
          onChange={evt =>
            this.props.handleInputChange("nameFirst", evt.target.value)
          }
          className="input"
          placeholder="John"
          autofocus="true"
        />
        <p className="input-title">Last Name:</p>

        <input
          type="name"
          value={this.props.target2}
          onChange={evt =>
            this.props.handleInputChange("nameLast", evt.target.value)
          }
          className="input"
          placeholder="Doe"
        />
        <br />
        <br />
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export default Name;
