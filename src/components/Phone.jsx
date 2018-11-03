import React, { Component } from "react";

class Phone extends Component {

  render() {

    return (
      <div className="container phone-form">
        <h1>Where can we give you a call?</h1>
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