import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginC from "./Components/LoginC";
import Home from "./Components/Home";

import Bloger from "./Components/Bloger";
import Navbar from "./Components/Navbar";
import { Provider } from "react-redux";
import { store } from "./redux/store";

class App extends Component {
  state = {
    loggedIn: true,
  };
  render() {
    return (
      <>
        <Provider store={store}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />

              <Route exact path="/login" component={LoginC} />

              <Route path="/blog" component={Bloger} />
            </Switch>
          </Router>
        </Provider>
      </>
    );
  }
}

export default App;
