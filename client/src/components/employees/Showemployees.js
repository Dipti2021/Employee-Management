import { useState } from "react";

import styled from "styled-components";
import PageWrapper from "../PageWrapper";
import Header from "../Header";

import axios from "axios";
// import GlobalStyles from "../GlobalStyles";

const Showemployee = () => {
  const [employees, setEmployees] = useState([]); //empty array to store the data
  //useState is a hook that allows us to use state in a functional component.
  //employees is the state and setEmployees is the function that allows us to change the state.

  const [employee, setEmployee] = useState({
    employeeID: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    title: "",
  });

  const [isEdit, setIsEdit] = useState(false);
  const [isAdd, setIsAdd] = useState(true);
  const [isDelete, setIsDelete] = useState(false);

  return (
    <>
      <PageWrapper>
        <Header />
        <Table>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Title</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(
              (
                employee //map through the employees array and return the employee
              ) => (
                <tr key={employee._id}>
                  {/* key is a unique identifier for each employee */}
                  <td>{employee.employeeID}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.address}</td>
                  <td>{employee.title}</td>
                  <td>
                    <Button
                      onClick={() => {
                        setIsEdit(true);
                        setIsAdd(false);
                        setIsDelete(false);
                        setEmployee(employee);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => {
                        setIsDelete(true);
                        setIsAdd(false);
                        setIsEdit(false);
                        setEmployee(employee);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </PageWrapper>
    </>
  );
};

const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid grey;
  margin-bottom: 10px;
  background-color: #ccc;
  color: black
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

const Table = styled.table`
  color: beige;
  width: 100%;
  border-collapse: collapse;
  margin-top: 50px;
  th,
  td {
    border: 1px solid grey;
    padding: 10px;
  }
`;

export default Showemployee;
