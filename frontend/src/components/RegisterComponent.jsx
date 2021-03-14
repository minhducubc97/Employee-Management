import React, { Component } from "react";

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  changeFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastName = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  registerUser = (event) => {};

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-7">
          <div className="card border border-dark bg-dark text-white">
            <div className="card-header">
              <h5>Register</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">First name</span>
                    </div>
                    <input
                      type="text"
                      className="form-control bg-dark text-white"
                      required
                      autoComplete="off"
                      value={this.state.firstName}
                      onChange={this.changeFirstName}
                      placeholder="Enter your first name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Last name</span>
                    </div>
                    <input
                      type="text"
                      className="form-control bg-dark text-white"
                      required
                      autoComplete="off"
                      value={this.state.lastName}
                      onChange={this.changeLastName}
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
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
                  this.state.firstName.length === 0 ||
                  this.state.lastName.length === 0 ||
                  this.state.email.length === 0 ||
                  this.state.password.length === 0
                }
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterComponent;
