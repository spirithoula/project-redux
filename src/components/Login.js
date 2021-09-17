import React, { Component, Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import "../style/Login";


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      islogged: false,
      loginParams: {
        userName: "",
        userPassword: ""
      }
    };
  }

  handleFormChange = event => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew
    });
  };
 
  login = event => {
    let username = this.state.loginParams.user_id;
    let userpassword = this.state.loginParams.user_password;
    if (username === "username" && userpassword === "12345") {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true
      });
    }
    event.preventDefault();
  };
  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <form onSubmit={this.login} className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Login</h1>
          <div className="row">
            <div className="col">
              <input
                type="text"
                name="username"
                onChange={this.handleFormChange}
                placeholder="Username"
              />
              <input
                type="password"
                name="userpassword"
                onChange={this.handleFormChange}
                placeholder="Password"
              />
              <input type="submit" value="Login" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;