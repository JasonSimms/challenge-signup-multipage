import React, { Component } from "react";
import { Link } from "react-router-dom";

class Email extends Component {
  componentDidMount() {
    // this.props.handleInputChange('email', '')
    console.log(`Name Mounted`);
  }

  render() {
    console.log(`Rendered`);

    return (
      <div className="container">
        <h1>Email</h1>
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