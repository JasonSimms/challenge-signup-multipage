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

    let mappedSalary = labels.map((range,index) => <p key={range}><input
    type="radio"
    name="salaryAnswer"
    value={range}
    onChange={evt =>
      this.props.handleInputChange("salary", evt.target.value)
    }
    className="input"
  />{range}</p>)
    return (
      <div className="input-form">
        <h1>Household Salary?</h1>
        {mappedSalary}
        <br />
        <br />
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export default Salary;
