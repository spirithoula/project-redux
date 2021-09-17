import React from 'react';

  render() ;{
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
export default Login;