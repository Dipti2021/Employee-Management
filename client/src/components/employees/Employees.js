import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PageWrapper from "../PageWrapper";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
// import GlobalStyles from "../GlobalStyles";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({
    employeeID: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    title: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isAdd, setIsAdd] = useState(true);
  const [isDelete, setIsDelete] = useState(false);
  const [isSearchtitle, setIsSearchtitle] = useState(false);
  const [isSearchFirstName, setIsSearchFirstName] = useState(false);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);
    setIsEdit(false);
    setIsAdd(false);
    setIsDelete(false);
    setIsShow(false);
    setIsSearchtitle(false);
    setIsSearchFirstName(false);

    if (isEdit) {
      updateEmployee(); //done edit
    } else if (isAdd) {
      addEmployee(); //done get
    } else if (isDelete) {
      deleteEmployee(); //done delete
    } else if (isSearchtitle) {
      searchTitle(); //done search
    } else if (isSearchFirstName) {
      searchFirstName(); //done search  firstName
    } else {
      getEmployees(); //done get
    }
  };

  const addEmployee = async (e) => {
    e.preventDefault();
    const newEmployee = {
      employeeID: employee.employeeID,
      firstName: employee.firstName,
      lastName: employee.lastName,
      phone: employee.phone,
      address: employee.address,
      title: employee.title,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    await axios
      .post("http://localhost:5000/employees", newEmployee, {
        headers: headers,
      })
      .then((res) => {
        setIsLoading(false);
        setIsSuccess(true);
        setIsError(false);

        setEmployee({
          employeeID: "",
          firstName: "",
          lastName: "",
          phone: "",
          address: "",
          title: "",
        });
      })
      .catch((err) => {
        setIsLoading(false);
        setIsSuccess(false);
        setIsError(true);

        console.log(err);
      });
  };

  const updateEmployee = async (e) => {
    e.preventDefault();
    const updatedEmployee = {
      employeeID: employee.employeeID,
      firstName: employee.firstName,
      lastName: employee.lastName,
      phone: employee.phone,
      address: employee.address,
      title: employee.title,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    await axios

      .put(
        `http://localhost:5000/employees/${employee.employeeID}`,
        updatedEmployee,
        {
          headers: headers,
        }
      )
      .then((res) => {
        setIsLoading(false);
        setIsSuccess(true);
        setIsError(false);

        setEmployee({
          employeeID: "",
          firstName: "",
          lastName: "",
          phone: "",
          address: "",
          title: "",
        });
      })
      .catch((err) => {
        setIsLoading(false);
        setIsSuccess(false);
        setIsError(true);

        console.log(err);
      });
  };

  const deleteEmployee = async (e) => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    await axios
      .delete(`http://localhost:5000/employees/${employee.employeeID}`, {
        headers: headers,
      })
      .then((res) => {
        setIsLoading(false);
        setIsSuccess(true);
        setIsError(false);

        setEmployee({
          employeeID: "",
          firstName: "",
          lastName: "",
          phone: "",
          address: "",

          title: "",
        });
      })
      .catch((err) => {
        setIsLoading(false);

        setIsSuccess(false);
        setIsError(true);

        console.log(err);
      });
  };

  const searchTitle = async (e) => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    await axios

      .get(`http://localhost:5000/employees/title/${employee.title}`, {
        headers: headers,
      })
      .then((res) => {
        setIsLoading(false);
        setIsSuccess(true);
        setIsError(false);
        setEmployees(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsSuccess(false);
        setIsError(true);

        console.log(err);
      });
  };

  const searchFirstName = async (e) => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    await axios

      .get(`http://localhost:5000/employees/firstName/${employee.firstName}`, {
        headers: headers,
      })
      .then((res) => {
        setIsLoading(false);
        setIsSuccess(true);
        setIsError(false);
        setEmployees(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsSuccess(false);
        setIsError(true);

        console.log(err);
      });
  };

  const getEmployees = async (e) => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    await axios
      .get("http://localhost:5000/employees", {
        headers: headers,
      })
      .then((res) => {
        setIsLoading(false);
        setIsSuccess(true);
        setIsError(false);
        setEmployees(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsSuccess(false);
        setIsError(true);

        console.log(err);
      });
  };

  return (
    <PageWrapper>
      <Header />
      <Container>
        <h1>Add Employee</h1>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="employeeID"
            placeholder="Employee ID"
            value={employee.employeeID}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={employee.firstName}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={employee.lastName}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="phone"
            placeholder="Phone"
            value={employee.phone}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="address"
            placeholder="Address"
            value={employee.address}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="title"
            placeholder="Title"
            value={employee.title}
            onChange={handleChange}
          />
          <Button type="submit">{isLoading ? "Loading..." : "Submit"}</Button>
        </Form>
        {isSuccess && <p>Employee Added</p>}
        {isError && <p>Error</p>}

        {/* <Table>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id}>
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
            ))}
          </tbody>
        </Table> */}
      </Container>
      <Footer />
    </PageWrapper>
  );
};

export default Employees;

const Container = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  backgroung-image: url("https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

const Form = styled.form`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid grey;
`;

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
  width: 100%;
  border-collapse: collapse;
  margin-top: 50px;
  th,
  td {
    border: 1px solid grey;
    padding: 10px;
  }
`;
