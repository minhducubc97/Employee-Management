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
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((result) => {
      this.setState({ employees: result.data });
    });
  }

  addEmployee() {
    this.props.history.push("/create-employee");
  }

  updateEmployee(id) {
    this.props.history.push(`/update-employee/${id}`);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addEmployee}>
            Add new Employee
          </button>
        </div>
        <div className="row border bg-primary text-light">
          <div className="col-1 justify-content-center border">Id</div>
          <div className="col-2 justify-content-center border">First name</div>
          <div className="col-2 justify-content-center border">Last name</div>
          <div className="col-5 justify-content-center border">Email</div>
          <div className="col-2 justify-content-center border">Action</div>
        </div>
        {this.state.employees.map((employee) => (
          <div className="row border" key={employee.id}>
            <div className="col-1 border">{employee.id}</div>
            <div className="col-2 border overflow-auto">
              {employee.firstName}
            </div>
            <div className="col-2 border overflow-auto">
              {employee.lastName}
            </div>
            <div className="col-5 border overflow-auto">{employee.emailId}</div>
            <div className="col-2 border">
              <button
                onClick={() => this.updateEmployee(employee.id)}
                className="btn btn-info"
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListEmployeeComponent;
