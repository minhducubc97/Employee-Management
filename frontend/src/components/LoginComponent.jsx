import React, { Component } from "react";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.validateUser = this.validateUser.bind(this);
  }

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  validateUser = () => {};

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-7">
          <div className="card border border-dark bg-dark text-white">
            <div className="card-header">
              <h5>Login</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Email</span>
                    </div>
                    <input
                      type="email"
                      className="form-control bg-dark text-white"
                      required
                      autoComplete="off"
                      value={this.state.email}
                      onChange={this.changeEmail}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Password</span>
                    </div>
                    <input
                      type="password"
                      className="form-control bg-dark text-white"
                      required
                      autoComplete="off"
                      value={this.state.password}
                      onChange={this.changePassword}
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="card-footer text-right">
              <button
                type="button"
                className="btn btn-sm btn-success"
                onClick={this.validateUser}
                disabled={
                  this.state.email.length === 0 ||
                  this.state.password.length === 0
                }
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
