import React from "react";
import { Redirect } from "react-router-dom";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";


class LoginC extends React.Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      username: "",
      password: "",
      loggedIn,
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const { username, password } = this.state;
    //logic of login
    if (username === "AAA" && password === "PPP") {
      localStorage.setItem("token", "Mayank");
      this.setState({
        loggedIn: true,
      });
    }
  }

  render() {
    /* if (this.state.loggedIn) {
      return <Redirect to="/admin" />;
    } */
    return (
      <>
        {/* -----Container------ */}

        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.submitForm}>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                    aria-describedby="emailHelp"
                    placeholder="username"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>

                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
          {/* ----*Login*---- */}
          <div className="column">
            <pre>{JSON.stringify(this.state)}</pre>
          </div>
          {/* <div className="cover-img">
            <img src={"bg.png"} alt="newimage" />
          </div> */}
        </div>

        {/* //*-------------Footer---------*\\ */}
      </>
    );
  }
}

export default LoginC;
