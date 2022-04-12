import { render, screen } from "@testing-library/react";
import {
  viewEmployees,
  viewOneEmployee,
  addEmployee,
  editEmployee,
  deleteEmployee,
  filterEmployeesbyTitle,
  filterEmployeesbyFirstName,
  adminLogin,
} from "../data/emps";
import batchImport from "./data/batchImport";

test("Backend Employee renders", () => {
  render(
    <Employee
      viewEmployees={viewEmployees}
      viewOneEmployee={viewOneEmployee} // under process
      addEmployee={addEmployee}
      updateEmployee={editEmployee}
      deleteEmployee={deleteEmployee}
      searchTitle={filterEmployeesbyTitle}
      searchFirstName={filterEmployeesbyFirstName}
      adminLogin={adminLogin}
    />
  );
  expect(screen.getByText("Employee")).toBeInTheDocument();
});
