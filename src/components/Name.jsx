import React, { Component } from "react";
import FadeIn from "react-fade-in";

class Name extends Component {
  render() {
    return (
      <div className="input-form">
        <FadeIn>
          <h1>We just have a few questions to get to know you...</h1>
          <p className="input-title">First Name:</p>
          <input
            type="name"
            value={this.props.target}
            onChange={evt =>
              this.props.handleInputChange("nameFirst", evt.target.value)
            }
            className="input"
            placeholder="Angela"
            autoFocus={true}
          />
          <p className="input-title">Last Name:</p>

          <input
            type="name"
            value={this.props.target2}
            onChange={evt =>
              this.props.handleInputChange("nameLast", evt.target.value)
            }
            className="input"
            placeholder="Merkel"
          />
          <br />
          <br />
          <p>{this.props.error}</p>
        </FadeIn>
      </div>
    );
  }
}

export default Name;
