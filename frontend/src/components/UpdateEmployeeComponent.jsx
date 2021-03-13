import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class UpdateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    this.updateEmployeeHandler = this.updateEmployeeHandler.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
  }

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailIdHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((result) => {
      let employee = result.data;
      this.setState({
        firstName: employee.firstName,
        lastName: employee.lastName,
        emailId: employee.emailId,
      });
    });
  }

  updateEmployeeHandler = (event) => {
    event.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    console.log("Employee updated: " + JSON.stringify(employee));
    console.log("ID:" + this.state.id);
    EmployeeService.updateEmployee(employee, this.state.id).then((result) => {
      this.props.history.push("/employees");
    });
  };

  cancelHandler() {
    this.props.history.push("/employees");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Employee</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name:</label>
                    <input
                      placeholder="John"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name:</label>
                    <input
                      placeholder="Snow"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      placeholder="JohnSnow@gmail.com"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailIdHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.updateEmployeeHandler}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger ml-2"
                    onClick={this.cancelHandler}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateEmployeeComponent;
