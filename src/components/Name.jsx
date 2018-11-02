import React, { Component } from "react";
import { Link } from "react-router-dom";

class Name extends Component {
  componentDidMount() {
    // this.props.handleInputChange('email', '')
    console.log(`Name Mounted`);
  }

  render() {
    console.log(`Rendered`);

    return (
      <div className="container">
        <h1>Name</h1>
        <input
          type="name"
          value={this.props.target}
          onChange={evt =>
            this.props.handleInputChange("name", evt.target.value)
          }
          className="input"
          placeholder="Name"
        />
        <br />
        <br />
        <Link className="link" to="/">
          <button className="button">Previous</button>
        </Link>
        <Link className="link" to="/2">
          <button className="button">Next</button>
        </Link>
        <br />
        <br />
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export default Name;
