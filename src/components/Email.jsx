import React, { Component } from "react";

class Email extends Component {

  render() {

    return (
      <div className="input-form">
        <h1>Where can we send our great offers?</h1>
        <p className="input-title">Email:</p>

        <input
          type="email"
          value={this.props.target}
          onChange={evt =>
            this.props.handleInputChange("email", evt.target.value)
          }
          className="input"
          placeholder="John.Snow@aol.com"
        />
        <br />
        <br />
      
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export default Email;