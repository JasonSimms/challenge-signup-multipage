import React, { Component } from "react";

class Name extends Component {
  render() {
    return (
      <div className="container">
        <h1>Just A Few Questions To Get Us Started...</h1>
        <input
          type="name"
          value={this.props.target}
          onChange={evt =>
            this.props.handleInputChange("nameFirst", evt.target.value)
          }
          className="input"
          placeholder="Family Name"
        />
        <input
          type="name"
          value={this.props.target}
          onChange={evt =>
            this.props.handleInputChange("nameLast", evt.target.value)
          }
          className="input"
          placeholder="Last Name"
        />
        <br />
        <br />
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export default Name;
