//create an employee table that displays all employees details like first name last name phone address title and department

//create a form that allows the user to add a new employee
//create a form that allows the user to edit an existing employee
//create a form that allows the user to delete an existing employee
//create a form that allows the user to search for an employee
//create a form that allows the user to view an employee
//create a form that allows the user to view all employees
//create a form that allows the user to view all employees by department
//create a form that allows the user to view all employees by title

import styled from "styled-components";
import { useState, useEffect } from "react";
// import PageWrapper from "../PageWrapper";
// import Header from "../Header";
//import icons for the table from material ui
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import axios from "axios";

const EmployeePage = () => {
  //use States to add the details of the employee
  const [employee, setEmployee] = useState({
    employeeID: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    title: "",
  });
  //use States to add the details of the employee
  const [employees, setEmployees] = useState([]);
  //useStates is a hook that allows us to use state in a functional component.
  //employees is the state and setEmployees is the function that allows us to change the state.
  const [isEdit, setIsEdit] = useState(false);
  const [isAdd, setIsAdd] = useState(true);
  const [isDelete, setIsDelete] = useState(false);
  //useStates is a hook that allows us to use state in a functional component.
  //isEdit is the state and setIsEdit is the function that allows us to change the state.
  //isAdd is the state and setIsAdd is the function that allows us to change the state.

  //useEffect is a hook that allows us to use an effect in a functional component.

  useEffect(() => {
    axios.get("http://localhost:5000/employees").then((res) => {
      setEmployees(res.data);
    });
  }, []);
  //useEffect is a hook that allows us to use an effect in a functional component.
  //axios.get is a function that allows us to make a request to a URL.
  //http://localhost:5000/employees is the URL that we are requesting.
  //res.data is the data that we are getting from the URL.

  //add delete and edit employee details
  const deleteEmployee = (id) => {
    axios.delete(`http://localhost:5000/employees/${id}`).then((res) => {
      setEmployees(employees.filter((employee) => employee._id !== id));
    });
  };

  const editEmployee = (id) => {
    const employee = employees.find((employee) => employee._id === id);
    setEmployee(employee);
    setIsEdit(true);
    setIsAdd(false);
    setIsDelete(false);
  };
  //add  employee details
  const addEmployee = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/employees", employee).then((res) => {
      setEmployees([...employees, res.data]);
    });
  };
  //edit employee details
  const updateEmployee = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/employees/${employee._id}`, employee)
      .then((res) => {
        setEmployees(
          employees.map((employee) =>
            employee._id === res.data._id ? res.data : employee
          )
        );
      });
  };
  //search employee details
  const searchEmployee = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:5000/employees/${employee.employeeID}`)
      .then((res) => {
        setEmployees(res.data);
      });
  };
  //view employee details
  const viewEmployee = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:5000/employees/${employee.employeeID}`)
      .then((res) => {
        setEmployees(res.data);
      });
  };
  //view all employee details
  const viewAllEmployee = (e) => {
    e.preventDefault();
    axios.get("http://localhost:5000/employees").then((res) => {
      setEmployees(res.data);
    });
  };
  //view all employee details by department
  const viewAllEmployeeByDepartment = (e) => {
    e.preventDefault();
    axios.get("http://localhost:5000/employees/department").then((res) => {
      setEmployees(res.data);
    });
  };
  //view all employee details by title
  const viewAllEmployeeByTitle = (e) => {
    e.preventDefault();
    axios.get("http://localhost:5000/employees/title").then((res) => {
      setEmployees(res.data);
    });
  };

  return (
    //based on the above states, the below code will display the employee details
    <div>
      <h1>Employee Management</h1>
      <div>
        <Button onClick={() => setIsAdd(true)}>Add Employee</Button>
        <Button onClick={() => setIsEdit(true)}>Edit Employee</Button>
        <Button onClick={() => setIsDelete(true)}>Delete Employee</Button>
        <Button onClick={() => setIsAdd(false)}>View Employee</Button>
        <Button onClick={() => setIsAdd(false)}>View All Employees</Button>
        <Button onClick={() => setIsAdd(false)}>
          View All Employees by Department
        </Button>
        <Button onClick={() => setIsAdd(false)}>
          View All Employees by Title
        </Button>
      </div>
      <div>
        {isAdd ? (
          <AddEmployeeForm addEmployee={addEmployee} />
        ) : (
          <div>
            <h2>Add Employee</h2>
            <AddEmployeeForm addEmployee={addEmployee} />
          </div>
        )}
      </div>
      <div>
        {isEdit ? (
          <EditEmployeeForm
            updateEmployee={updateEmployee}
            employee={employee}
          />
        ) : (
          <div>
            <h2>Edit Employee</h2>
            <EditEmployeeForm
              updateEmployee={updateEmployee}
              employee={employee}
            />
          </div>
        )}
      </div>
      <div>
        {isDelete ? (
          <DeleteEmployeeForm
            deleteEmployee={deleteEmployee}
            employee={employee}
          />
        ) : (
          <div>
            <h2>Delete Employee</h2>
            <DeleteEmployeeForm
              deleteEmployee={deleteEmployee}
              employee={employee}
            />
          </div>
        )}
      </div>
      <div>
        {isAdd ? (
          <ViewEmployeeForm viewEmployee={viewEmployee} employee={employee} />
        ) : (
          <div>
            <h2>View Employee</h2>
            <ViewEmployeeForm viewEmployee={viewEmployee} employee={employee} />
          </div>
        )}
      </div>
      <div>
        {isAdd ? (
          <ViewAllEmployeeForm
            viewAllEmployee={viewAllEmployee}
            employee={employee}
          />
        ) : (
          <div>
            <h2>View All Employees</h2>
            <ViewAllEmployeeForm
              viewAllEmployee={viewAllEmployee}
              employee={employee}
            />
          </div>
        )}
      </div>
      <div>
        {isAdd ? (
          <ViewAllEmployeeByDepartmentForm
            viewAllEmployeeByDepartment={viewAllEmployeeByDepartment}
            employee={employee}
          />
        ) : (
          <div>
            <h2>View All Employees by Department</h2>
            <ViewAllEmployeeByDepartmentForm
              viewAllEmployeeByDepartment={viewAllEmployeeByDepartment}
              employee={employee}
            />
          </div>
        )}
      </div>
      <div>
        {isAdd ? (
          <ViewAllEmployeeByTitleForm
            viewAllEmployeeByTitle={viewAllEmployeeByTitle}
            employee={employee}
          />
        ) : (
          <div>
            <h2>View All Employees by Title</h2>
            <ViewAllEmployeeByTitleForm
              viewAllEmployeeByTitle={viewAllEmployeeByTitle}
              employee={employee}
            />
          </div>
        )}
      </div>
    </div>
  );
};
//create styled components for the above components

const AddEmployeeForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  margin: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;

  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  button {
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.9;
    font-size: 20px;

    &:hover {
      opacity: 1;
    }
  }
`;
const EditEmployeeForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  margin: 10px;
  font-family: "Roboto", sans-serif;

  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  button {
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;

    margin: 8px 0;

    border: none;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.9;
    font-size: 20px;

    &:hover {
      opacity: 1;
    }
  }
`;
const DeleteEmployeeForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  margin: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  button {
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.9;
    font-size: 20px;

    &:hover {
      opacity: 1;
    }
  }
`;
const ViewEmployeeForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  margin: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  button {
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.9;
    font-size: 20px;

    &:hover {
      opacity: 1;
    }
  }
`;
const ViewAllEmployeeByDepartmentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  margin: 10px;
  font-family: "Roboto", sans-serif;

  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  button {
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.9;
    font-size: 20px;

    &:hover {
      opacity: 1;
    }
  }
`;
const ViewAllEmployeeForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  margin: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  button {
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.9;
    font-size: 20px;

    &:hover {
      opacity: 1;
    }
  }
`;
const UpdateEmployeeForm = styled.form``;
const ViewAllEmployeeByTitleForm = styled.form``;
const ViewEmployeeByNameForm = styled.form``;

export default EmployeePage;
