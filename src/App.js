import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
      progress: this._setProgress(),
      name:"Pinkey",
      email: `Fake@fake.gmx`,
      phone: `1234567`,
      salary: `500`,
    };

    this._setProgress = this._setProgress.bind(this)
    this._handleInputChange = this._handleInputChange.bind(this)
    this._sign = this._sign.bind(this)

  }

  render() {
    return (
      <React.Fragment>

      <BrowserRouter basename="signup">
        <Switch>
          <Route exact path="/" render={() => <Landing />} />
          <Route exact path="/1" render={() => <Name 
          target={this.state.name}
          handleInputChange={this._handleInputChange}
          error={this.state.error}
          // sign={this._sign}
          />}  />
          <Route exact path="/2" render={() => <Email 
          target={this.state.email}
          handleInputChange={this._handleInputChange}
          error={this.state.error}/>}  />
          <Route exact path="/3" render={() => <Phone 
          target={this.state.phone}
          handleInputChange={this._handleInputChange}
          error={this.state.error}/>}  />
          <Route exact path="/4" render={() => <Salary 
          target={this.state.salary}
          handleInputChange={this._handleInputChange}
          error={this.state.error}/>}  />
          <Route exact path="/5" render={() => <Summary 
          data={this.state}
          error={this.state.error}
          />}  />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      </React.Fragment>
    );
  }


  _setProgress(){
    return 5
  }

  _navigate(){
    console.log(`navigated!`)
  }

  _handleInputChange(key, newValue) {
    this.setState({
        [key]: newValue,
    })
}

_sign(type) {
  console.log(`sign${type}`)
  // this.setState({
  //     error: '',
  // })

  // const pictureDeclaration = type === 'up' && { picture: this.state.picture }

  // api.post(
  //     `/api/auth/sign-${type}`,

}
}
export default App;
