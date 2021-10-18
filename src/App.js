import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginC from "./Components/LoginC";
import Home from "./Components/Home";
import AdminC from "./Components/AdminC";
import LogoutC from "./Components/LogoutC";
import Navbar from "./Components/Navbar";
import { Provider } from "react-redux";
import { store } from "./redux/store";

class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={LoginC} />
              <Route path="/admin" component={AdminC} />
              <Route path="/LogoutC" component={LogoutC} />
            </Switch>
          </Router>
        </Provider>
      </>
    );
  }
}

export default App;
