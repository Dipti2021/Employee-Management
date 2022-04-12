import {
  updateEmployee,
  addEmployee,
  deleteEmployee,
  filterEmployeesbyTitle,
  filterEmployeesbyFirstName,
  viewEmployees,
  viewOneEmployee,
} from "../src/components/employees/Employees";

// Test for updateEmployee

const initialState = {
  employees: [
    {
      _id: "5f58f8f8e8f8b9f8c8b9f8c",
      firstName: "John",
      lastName: "Doe",
      employeeID: "12345",
      phone: "1234567890",
      address: "123 Main St",
      title: "Manager",
    },
    {
      _id: "5f58f8f8e8f8b9f8c8b9f8c",
      firstName: "Jane",
      lastName: "Doe",
      employeeID: "12346",
      phone: "1234567891",
      address: "223 Main St",
      title: "CEO",
    },
  ],
};

test("updateEmployee returns an array of employees", () => {
  const action = {
    type: updateEmployee,
    payload: {
      _id: "5f58f8f8e8f8b9f8c8b9f8c",
      firstName: "John",
      lastName: "Doe",
      employeeID: "12345",
      phone: "1234567890",
      address: "123 Main St",
      title: "Manager",
    },
  };
  const newState = updateEmployee(initialState, action);
  expect(newState.employees).toEqual([
    {
      _id: "5f58f8f8e8f8b9f8c8b9f8c",
      firstName: "Johnny",
      lastName: "Doee",
      employeeID: "12345",
      phone: "1234567890",
      address: "123 Main St",
      title: "SrManager",
    },
  ]);
});

test("addEmployee returns an array of employees", () => {
  const action = {
    type: addEmployee,
    payload: {
      firstName: "",
      lastName: "",
      employeeID: "",
      phone: "",
      address: "",
      title: "",
    },
  };
  const newState = addEmployee(initialState, action);
  expect(newState.employees).toEqual([
    {
      _id: "5f58f8f8e8f8b9f8c8b9f8c",
      firstName: "John",
      lastName: "Doe",
      employeeID: "12345",
      phone: "1234567890",
      address: "123 Main St",
      title: "Manager",
    },
  ]);
});

test("deleteEmployee returns an array of employees", () => {
  const action = {
    type: deleteEmployee,
    payload: {
      _id: "5f58f8f8e8f8b9f8c8b9f8c",
      firstName: "John",
      lastName: "Doe",
      employeeID: "12345",
      phone: "1234567890",
      address: "123 Main St",
      title: "Manager",
    },
  };
  const newState = deleteEmployee(initialState, action);
  expect(newState.employees).toEqual([
    {
      firstName: "",
      lastName: "",
      employeeID: "",
      phone: "",
      address: "",
      title: "",
    },
  ]);
});

test("filterEmployeesbyTitle returns an array of employees", () => {
  const action = {
    type: filterEmployeesbyTitle,
    payload: {
      title: "Manager",
    },
  };
  const newState = filterEmployeesbyTitle(initialState, action);
  expect(newState.employees).toEqual([
    {
      _id: "5f58f8f8e8f8b9f8c8b9f8c",
      firstName: "John",
      lastName: "Doe",
      employeeID: "12345",
      phone: "1234567890",
      address: "123 Main St",
      title: "Manager",
    },
  ]);
});

test("filterEmployeesByFirstName returns an array of employees", () => {
  const action = {
    type: filterEmployeesbyFirstName,
    payload: {
      firstName: "John",
    },
  };
  const newState = filterEmployeesbyFirstName(initialState, action);
  expect(newState.employees).toEqual([
    {
      _id: "5f58f8f8e8f8b9f8c8b9f8c",
      firstName: "John",
      lastName: "Doe",
      employeeID: "12345",
      phone: "1234567890",
      address: "123 Main St",
      title: "Manager",
    },
  ]);
});

test("viewEmployees returns an array of employees", () => {
  const action = {
    type: viewEmployees,
    payload: {
      _id: "5f58f8f8e8f8b9f8c8b9f8c",
      firstName: "John",
      lastName: "Doe",
      employeeID: "12345",
      phone: "1234567890",
      address: "123 Main St",
      title: "Manager",
    },
  };
  const newState = viewEmployees(initialState, action);
  expect(newState.employees).toEqual([
    {
      _id: "5f58f8f8e8f8b9f8c8b9f8c",
      firstName: "John",
      lastName: "Doe",
      employeeID: "12345",
      phone: "1234567890",
      address: "123 Main St",
      title: "Manager",
    },
  ]);
});

test("viewOneEmployee returns only the selected employee", () => {
  const action = {
    type: viewOneEmployee,
    payload: {
      _id: "5f58f8f8e8f8b9f8c8b9f8c",
      firstName: "John",
      lastName: "Doe",
      employeeID: "12345",
      phone: "1234567890",
      address: "123 Main St",
      title: "Manager",
    },
  };
  const newState = viewOneEmployee(initialState, action);
  expect(newState.employees).toEqual([
    {
      _id: "5f58f8f8e8f8b9f8c8b9f8c",
      firstName: "John",
      lastName: "Doe",
      employeeID: "12345",
      phone: "1234567890",
      address: "123 Main St",
      title: "Manager",
    },
  ]);
});
