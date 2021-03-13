import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService.js";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.viewEmployee = this.viewEmployee.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((result) => {
      this.setState({ employees: result.data });
    });
  }

  addEmployee() {
    this.props.history.push(`/create-employee`);
  }

  updateEmployee(id) {
    this.props.history.push(`/update-employee/${id}`);
  }

  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((result) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  }

  viewEmployee(id) {
    this.props.history.push(`/view-employee/${id}`);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <br />
        <div className="row">
          <button className="btn btn-primary" onClick={this.addEmployee}>
            Add new Employee
          </button>
        </div>
        <br />
        <div className="row border bg-info text-light">
          <div className="col-2 justify-content-center border">First name</div>
          <div className="col-2 justify-content-center border">Last name</div>
          <div className="col-5 justify-content-center border">Email</div>
          <div className="col-3 justify-content-center border">Action</div>
        </div>
        {this.state.employees.map((employee) => (
          <div className="row border" key={employee.id}>
            <div className="col-2 border overflow-auto">
              {employee.firstName}
            </div>
            <div className="col-2 border overflow-auto">
              {employee.lastName}
            </div>
            <div className="col-5 border overflow-auto">{employee.emailId}</div>
            <div className="col-3 border">
              <button
                onClick={() => this.updateEmployee(employee.id)}
                className="btn btn-primary"
              >
                Update
              </button>
              <button
                onClick={() => this.deleteEmployee(employee.id)}
                className="btn btn-danger ml-2"
              >
                Delete
              </button>
              <button
                onClick={() => this.viewEmployee(employee.id)}
                className="btn btn-info ml-2"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListEmployeeComponent;
