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

const EmployeePage = () => {
  return (
    <Page>
      <TableBody>
        <TableRow>
          <TableCell>Employee ID</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Address</TableCell>
          <TableCell>Department</TableCell>
          <TableCell>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export default EmployeePage;
