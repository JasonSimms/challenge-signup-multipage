// Library Imports
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

// Import all Components:
import Landing from "./components/Landing";
import Name from "./components/Name";
import Email from "./components/Email";
import Phone from "./components/Phone";
import Salary from "./components/Salary";
import Summary from "./components/Summary";
import NotFound from "./components/NotFound";
import End from "./components/End";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      progress: 0,
      step: 0,
      nameFirst: ``,
      nameLast: ``,
      email: ``,
      phone: ``,
      salary: ``
    };

    this._setProgress = this._setProgress.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
    this._reset = this._reset.bind(this);
    this._navigate = this._navigate.bind(this);
    this._validate = this._validate.bind(this);
  }

  render() {
    // Array of Components to support conditional rendering based on this.state.step.
    const displayedFormARR = [
      <Name
        target={this.state.name}
        handleInputChange={this._handleInputChange}
        error={this.state.error}
      />,
      <Email
        target={this.state.email}
        handleInputChange={this._handleInputChange}
        error={this.state.error}
      />,
      <Phone
        target={this.state.phone}
        handleInputChange={this._handleInputChange}
        error={this.state.error}
      />,
      <Salary
        target={this.state.salary}
        handleInputChange={this._handleInputChange}
        error={this.state.error}
      />,
      <Summary data={this.state} error={this.state.error} reset={this._reset} />
    ];

    // Build Navigational Controls
    let navNext, navBack;

    if (this.state.step > 0 && this.state.step < 4) {
      navBack = (
        <button className="button back" onClick={() => this._navigate("back")}>
          Back
        </button>
      );
    }

    if (this.state.step < 4) {
      navNext = (
        <button className="button next" onClick={() => this._navigate()}>
          Next
        </button>
      );
    }

    return (
      <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route exact path="/" render={() => <Landing />} />
              <Route exact path="/end" render={() => <End />} />
              <Route
                exact
                path="/signup"
                render={() => (
                  <div className="container input-container">
                    <Progress
                      percent={this.state.progress}
                      theme={{
                        default: {
                          symbol: this.state.progress + "%",
                          trailColor: "lightblue",
                          color: "blue"
                        },
                        active: {
                          symbol: this.state.progress + "%",
                          trailColor: "yellow",
                          color: "orange"
                        },
                        success: {
                          symbol: this.state.progress + "%",
                          trailColor: "lime",
                          color: "green"
                        }
                      }}
                    />
                    {displayedFormARR[this.state.step]}
                    {navBack}
                    {navNext}
                  </div>
                )}
              />

              <Route component={NotFound} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    );
  }

  _validate(key) {
    let regex;
    let validationMessage = `Valid Entry!`;
    switch (key) {
      case 0:
        regex = /^[a-zA-Z]*$/gm;
        if (
          this.state.nameFirst &&
          this.state.nameLast &&
          this.state.nameLast.match(regex) &&
          this.state.nameFirst.match(regex)
        )
          return true;
        else validationMessage = `Please Enter a Valid First and Last Name`;
        break;
      case 1:
        regex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@(([0-9a-zA-Z])+([-\w]*[0-9a-zA-Z])*\.)+[a-zA-Z]{2,9})$/;
        if (
          this.state.email &&
          this.state.email.includes("@") &&
          this.state.email.includes(".")
        )
          return true;
        else validationMessage = `Invalid Email - Must Contain @`;

        break;
      case 2:
        regex = /\d{5,20}/;
        if (this.state.phone.match(regex)) return true;
        else
          validationMessage = `Invalid Phone - Digits Only Please! Length must be between 5 and 20`;

        break;
      case 3:
        if (this.state.salary) return true;
        else validationMessage = `Please Choose a Salary Range`;

        break;
      default:
        return false;
    }
    alert(validationMessage);
  }

  _setProgress() {
    if (this.state.progress < 100)
      this.setState(prevState => ({
        progress: prevState.progress + 25
      }));
  }

  _handleInputChange(key, newValue) {
    this.setState({
      [key]: newValue
    });
  }

  _reset() {
    this.setState({
      error: null,
      progress: 0,
      step: 0,
      nameFirst: ``,
      nameLast: ``,
      email: ``,
      phone: ``,
      salary: ``
    });
  }

  _navigate(key) {
    if (key === "back")
      this.setState(prevState => ({ step: prevState.step - 1 }));
    else if (this._validate(this.state.step)) {
      this._setProgress();

      setTimeout(() => {
        this.setState(prevState => ({
          step: prevState.step + 1
        }));
      }, 1000);
    }
  }
}
export default App;
