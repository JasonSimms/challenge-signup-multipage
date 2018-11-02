import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

import Landing from "./components/Landing";
import Name from "./components/Name";
import Email from "./components/Email";
import Phone from "./components/Phone";
import Salary from "./components/Salary";
import Summary from "./components/Summary";
import NotFound from "./components/NotFound";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      progress: 0,
      name: ``,
      email: ``,
      phone: ``,
      salary: ``,
    };

    this._setProgress = this._setProgress.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
    this._reset = this._reset.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        


      <Progress percent={this.state.progress}
      theme={
        {
          default: {
            symbol: this.state.progress + '%',
            trailColor: 'lightblue',
            color: 'blue'
          },
          active: {
            symbol: this.state.progress + '%',
            trailColor: 'yellow',
            color: 'orange'
          },
          success: {
            symbol: this.state.progress + '%',
            trailColor: 'lime',
            color: 'green'
          }
        }
      }
      />
      <button className="button" onClick={() => this._setProgress()}>
       Set Progress
      </button>
        <BrowserRouter basename="signup">
          <Switch>
            <Route exact path="/" render={() => <Landing />} />
            <Route
              exact
              path="/1"
              render={() => (
                <Name
                  target={this.state.name}
                  handleInputChange={this._handleInputChange}
                  error={this.state.error}
                />
              )}
            />
            <Route
              exact
              path="/2"
              render={() => (
                <Email
                  target={this.state.email}
                  handleInputChange={this._handleInputChange}
                  error={this.state.error}
                />
              )}
            />
            <Route
              exact
              path="/3"
              render={() => (
                <Phone
                  target={this.state.phone}
                  handleInputChange={this._handleInputChange}
                  error={this.state.error}
                />
              )}
            />
            <Route
              exact
              path="/4"
              render={() => (
                <Salary
                  target={this.state.salary}
                  handleInputChange={this._handleInputChange}
                  error={this.state.error}
                />
              )}
            />
            <Route
              exact
              path="/5"
              render={() => (
                <Summary data={this.state} error={this.state.error} reset={this._reset}/>
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }

  _setProgress() {
    if(this.state.progress <100)this.setState({progress: this.state.progress+20})
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
      progress: this._setProgress(),
      name: "",
      email: ``,
      phone: ``,
      salary: ``
    });
  }
}
export default App;
