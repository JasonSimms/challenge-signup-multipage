import React, { Component } from "react";

class Name extends Component {
  componentDidMount() {
    // this.props.handleInputChange('email', '')
    console.log(`Name Mounted`);
  }

  render() {
    console.log(this.props);

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
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export default Name;
