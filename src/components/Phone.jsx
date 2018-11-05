import React, { Component } from "react";
import FadeIn from "react-fade-in";

class Phone extends Component {
  render() {
    return (
      <div className="input-form">
        <FadeIn>
          <h1>Where can we give you a call?</h1>
          <p className="input-title">Phone Number:</p>

          <input
            type="string"
            value={this.props.target}
            onChange={evt =>
              this.props.handleInputChange("phone", evt.target.value)
            }
            className="input"
            placeholder="XXXXXXXXXXX"
            autofocus={true}
          />
          <br />
          <br />

          <p>{this.props.error}</p>
        </FadeIn>
      </div>
    );
  }
}

export default Phone;
