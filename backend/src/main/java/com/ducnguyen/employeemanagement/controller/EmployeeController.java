package com.ducnguyen.employeemanagement.controller;

import com.ducnguyen.employeemanagement.exception.NotFoundException;
import com.ducnguyen.employeemanagement.model.Employee;
import com.ducnguyen.employeemanagement.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable Long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new NotFoundException("Employee" + id + "not found!"));
        return ResponseEntity.ok(employee);
    }

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeToUpdate) {
        Employee employee =
                employeeRepository.findById(id).orElseThrow(() -> new NotFoundException("Employee" + id + "not " +
                        "found!"));
        employee.setFirstName(employeeToUpdate.getFirstName());
        employee.setLastName(employeeToUpdate.getLastName());
        employee.setEmailId(employeeToUpdate.getEmailId());
        Employee employeeUpdated = employeeRepository.save(employee);
        return ResponseEntity.ok(employeeUpdated);
    }
}
