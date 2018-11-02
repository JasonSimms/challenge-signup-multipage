import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./components/Landing";
import Name from "./components/Name";
import Email from "./components/Email";
import Phone from "./components/Name";
import Salary from "./components/Name";
import Summary from "./components/Name";
import NotFound from "./components/NotFound";
import Progress from "./components/Progress";
import Navigate from "./components/Navigation"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      progress: this._setProgress(),
    };

    this._setProgress = this._setProgress.bind(this)
  }

  render() {
    return (
      <React.Fragment>

      <BrowserRouter basename="signup">
        <Switch>
          <Route exact path="/" render={() => <Landing />} />
          <Route exact path="/1" render={() => <Name />}  />
          <Route exact path="/2" render={() => <Email />}  />
          <Route exact path="/3" render={() => <Phone />}  />
          <Route exact path="/4" render={() => <Salary />}  />
          <Route exact path="/5" render={() => <Summary />}  />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      <Progress progress={this.state.progress}/>
      <Navigate/>
      </React.Fragment>
    );
  }


  _setProgress(){
    return 5
  }

  _navigate(){
    console.log(`navigated!`)
  }

}

export default App;
