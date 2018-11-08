import React, { Component } from "react";
import FadeIn from "react-fade-in";


class Email extends Component {

  render() {

    return (
      <div className="input-form">
      <FadeIn>

        <h1>Where can we send our great offers?</h1>
        <p className="input-title">Email:</p>

        <input
          type="email"
          value={this.props.target}
          onChange={evt =>
            this.props.handleInputChange("email", evt.target.value)
          }
          className="input"
          placeholder="simmsTheCoder@gmail.com"
          autoFocus={true}
        />
        <br />
        <br />
      
        <p>{this.props.error}</p>
      </FadeIn>

      </div>
    );
  }
}

export default Email;