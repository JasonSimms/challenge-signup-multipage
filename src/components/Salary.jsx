import React, { Component } from "react";

class Salary extends Component {

  render() {
    const labels = [
      "0 - 1.000",
      "1.000 - 2.000",
      "2.000 - 3.000",
      "3.000 - 4.000",
      "Mehr als 4.000"
    ];

    let mappedSalary = labels.map((range,index) => <div key={range}><input
      type="radio"
      value={range}
      onChange={evt =>
        this.props.handleInputChange("salary", evt.target.value)
      }
      className="input"
    />{range}</div>)
    return (
      <div className="container">
        <h1>Household Salary Range?</h1>
        {mappedSalary}
        <br />
        <br />
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export default Salary;
