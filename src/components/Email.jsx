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
        <Link className="link" to="/1">
          <button className="button">Previous</button>
        </Link>
        <Link className="link" to="/3">
          <button className="button">Next</button>
        </Link>
        <br />
        <br />
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export default Email;