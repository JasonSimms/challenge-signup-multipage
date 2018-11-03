import React, { Component } from "react";
import { Link } from "react-router-dom";

class Salary extends Component {
  componentDidMount() {
    // this.props.handleInputChange('email', '')
    console.log(`Name Mounted`);
  }

  render() {
    console.log(`Rendered`);

    return (
      <div className="container">
        <h1>Salary</h1>
        <input
          type="number"
          value={this.props.target}
          onChange={evt =>
            this.props.handleInputChange("salary", evt.target.value)
          }
          className="input"
          placeholder="Salary"
        />
        <br />
        <br />
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export default Salary;
