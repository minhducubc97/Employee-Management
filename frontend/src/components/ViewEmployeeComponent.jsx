import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((result) => {
      this.setState({ employee: result.data });
    });
  }

  render() {
    return (
      <div>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">Employee details</h3>
          <div className="card-body">
            <div className="row">
              <label className="col-3">First name: </label>
              <div>{this.state.employee.firstName}</div>
            </div>
            <div className="row">
              <label className="col-3">Last name: </label>
              <div>{this.state.employee.lastName}</div>
            </div>
            <div className="row">
              <label className="col-3">Email: </label>
              <div>{this.state.employee.emailId}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewEmployeeComponent;
