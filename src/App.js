import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

import Landing from "./components/Landing";
import Name from "./components/Name";
import Email from "./components/Email";
import Phone from "./components/Phone";
import Salary from "./components/Salary";
import Summary from "./components/Summary";
import NotFound from "./components/NotFound";

// import NavButtons from "./components/Navigation";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      progress: 0,
      step: 0,
      name: ``,
      email: ``,
      phone: ``,
      salary: ``
    };

    this._setProgress = this._setProgress.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
    this._reset = this._reset.bind(this);
    this._navigate = this._navigate.bind(this);
  }

  render() {
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

    let navNext, navBack;
    
    if (this.state.step > 0 && this.state.step < 4) {
      navBack = (
        <button className="button" onClick={() => this._navigate("back")}>
          Back
        </button>
      );
    }
    
    if (this.state.step < 4) {
      navNext = (
        <button className="button" onClick={() => this._navigate()}>
          Next
        </button>
      );
    }

    return (
      <React.Fragment>
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

        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route exact path="/" render={() => <Landing />} />
              <Route
                exact
                path="/signup"
                render={() => (
                  <div>
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

  _setProgress() {
    if (this.state.progress < 100)
      this.setState({
        progress: this.state.progress + 20
      });
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
      name: "",
      email: ``,
      phone: ``,
      salary: ``
    });
  }

  _navigate(key) {
    if (key === "back") this.setState({ step: this.state.step - 1 });
    else {
      this._setProgress();
      this.setState({
        step: this.state.step + 1
      });
    }
  }
}
export default App;
