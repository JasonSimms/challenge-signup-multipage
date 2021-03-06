// Library Imports
import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
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
import Music from "./components/Music";

// Import functions:
import isInputValid from "./js/isInputValid";

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
  }

  componentDidMount() {
    console.log("Thank you for your interest in my code!");
    this._reset();
  }
  render() {
    // Array of Components to support conditional rendering based on this.state.step.
    const displayedFormARR = [
      <Name
        target2={this.state.nameLast}
        target={this.state.nameFirst}
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
      <Summary data={this.state} error={this.state.error} />
    ];

    // Build Navigational Controls
    let navNext, navBack, summaryNav;

    if (this.state.step > 0 && this.state.step <= 4) {
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

    if (this.state.step === 4) {
      summaryNav = (
        <React.Fragment>
          <Link to={process.env.PUBLIC_URL + "/"} className="btnlink">
            Landing
          </Link>
          <button
            className="button next startover" onClick=
            {() => this._reset()}> Start Over
          </button>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="pseudo-container">
            <Switch>
              <Route
                exact
                path={process.env.PUBLIC_URL + "/"}
                render={() => <Landing />}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/signup"}
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
                    <div className="pseudo-container">
                      {navBack}
                      {navNext}
                      {summaryNav}
                      <Music />
                    </div>
                  </div>
                )}
              />

              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
  // Function declarations:

  // Calculates and sets progress bar
  _setProgress() {
    const steps = 4;
    const interval = 100 / steps;
    if (this.state.progress < 100) {
      this.setState(prevState => ({
        progress: (1 + this.state.step) * interval
      }));
    }
  }

  // Delivers input field to state
  _handleInputChange(key, newValue) {
    this.setState({
      [key]: newValue
    });
  }

  // Resets form to start over
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

  // Handles advancing through the form.
  _navigate(key) {
    if (key === "back")
      this.setState(prevState => ({ step: prevState.step - 1 }));
    else if (isInputValid(this.state.step, this.state)) {
      this._setProgress();
      // TIMEOUT ASSISTS IN ANIMATIONS DELAY. Can be removed for UI enhancements.
      setTimeout(() => {
        this.setState(prevState => ({
          step: prevState.step + 1
        }));
      }, 10);
    }
  }
}
export default App;
