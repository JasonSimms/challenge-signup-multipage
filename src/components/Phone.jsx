import React, { Component } from "react";
import { Link } from "react-router-dom";

class Phone extends Component {
  componentDidMount() {
    // this.props.handleInputChange('email', '')
    console.log(`Name Mounted`);
  }

  render() {
    console.log(`Rendered`);

    return (
      <div className="container">
        <h1>Phone</h1>
        <input
          type="string"
          value={this.props.target}
          onChange={evt =>
            this.props.handleInputChange("phone", evt.target.value)
          }
          className="input"
          placeholder="phone"
        />
        <br />
        <br />
        
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export default Phone;