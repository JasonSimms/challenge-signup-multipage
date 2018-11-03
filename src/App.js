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

import NavButtons from "./components/Navigation"




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
    this._formSubmit = this._formSubmit.bind(this)
  }

  render() {
    const displayedFormARR = [
      <Name
        target={this.state.name}
        handleInputChange={this._handleInputChange}
        error={this.state.error}
        submit={this._formSubmit}
      />,
      <Email
        target={this.state.email}
        handleInputChange={this._handleInputChange}
        error={this.state.error}
        submit={this._formSubmit}

      />,
      <Phone
        target={this.state.phone}
        handleInputChange={this._handleInputChange}
        error={this.state.error}
        submit={this._formSubmit}

      />,
      <Salary
        target={this.state.salary}
        handleInputChange={this._handleInputChange}
        error={this.state.error}
        submit={this._formSubmit}

      />,
      <Summary data={this.state} error={this.state.error} reset={this._reset} />
    ];
let navigation =  <div>Future place of nav</div>
    if(this.state.progress > 0){navigation = <NavButtons submit={this._formSubmit}/>}

    return (
      <React.Fragment>
        <div>
          {" "}
          <p>Try this!</p>
        </div>
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

        <button className="button" onClick={() => this._setProgress()}>
          Set Progress
        </button>
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route exact path="/" render={() => <Landing />} />
              <Route
                exact
                path="/signup"
                render={() => displayedFormARR[this.state.step]}
              />

              <Route component={NotFound} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
        {navigation}
      </React.Fragment>
    );
  }

  _setProgress() {
    if (this.state.progress < 100)
      this.setState({
        progress: this.state.progress + 20,
        step: this.state.step + 1
      });
  }

  _navigate() {
    console.log(`navigated!`);
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

  _formSubmit(){
    console.log(`submitted`)
    this.setState({
      step: this.state.step + 1
    })
  }
}
export default App;
