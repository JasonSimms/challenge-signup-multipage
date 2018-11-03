import React, { Component } from "react";

class Email extends Component {

  render() {

    return (
      <div className="container email-form">
        <h1>Where can we send our great offers?</h1>
        <input
          type="email"
          value={this.props.target}
          onChange={evt =>
            this.props.handleInputChange("email", evt.target.value)
          }
          className="input"
          placeholder="email"
        />
        <br />
        <br />
      
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export default Email;