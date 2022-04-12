import {
  viewEmployees,
  viewOneEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  searchTitle,
  searchFirstName,
} from "./employee.controller";

const viewEmployees = "viewEmployees";
const viewOneEmployee = "viewOneEmployee";
const addEmployee = "addEmployee";
const updateEmployee = "updateEmployee";
const deleteEmployee = "deleteEmployee";
const searchTitle = "searchTitle";
const searchFirstName = "searchFirstName";

const initialState = {
  employees: [
    {
      _id: "5f4d7c8b7c8b7c8b7c8b7c8b",
      firstName: "John",
      lastName: "Doe",
      employeeID: "12345",
      phone: "1234567890",
      address: "123 Main St",
      title: "Manager",
    },
    {
      _id: "5f4d7c8b7c8b7c8b7c8b7c8c",
      firstName: "Jane",
      lastName: "Doe",
      employeeID: "12346",
      phone: "1234567891",
      address: "223 Main St",
      title: "CEO",
    },
  ],
  searchTitle: "",
  searchFirstName: "",
  employee: {},
  error: "",
  isLoading: false,
  isEditing: false,
};

test("viewEmployees returns an array of employees", () => {
  const action = {
    type: viewEmployees,
    payload: [
      {
        _id: "5f4d7c8b7c8b7c8b7c8b7c8b",
        firstName: "John",
        lastName: "Doe",
        employeeID: "12345",
        phone: "1234567890",
        address: "123 Main St",
        title: "Manager",
      },
      {
        _id: "5f4d7c8b7c8b7c8b7c8b7c8c",
        firstName: "Jane",
        lastName: "Doe",
        employeeID: "12346",
        phone: "1234567891",
        address: "223 Main St",
        title: "CEO",
      },
    ],
  };
  const newState = viewEmployeesReducer(initialState, action);
  expect(newState.employees).toEqual([
    {
      _id: "5f4d7c8b7c8b7c8b7c8b7c8b",
      firstName: "John",
      lastName: "Doe",
      employeeID: "12345",
      phone: "1234567890",
      address: "123 Main St",
      title: "Manager",
    },
    {
      _id: "5f4d7c8b7c8b7c8b7c8b7c8c",
      firstName: "Jane",
      lastName: "Doe",
      employeeID: "12346",
      phone: "1234567891",
      address: "223 Main St",
      title: "CEO",
    },
  ]);
});

test("viewOneEmployee returns an employee", () => {
  const action = {
    type: viewOneEmployee,
    payload: {
      _id: "5f4d7c8b7c8b7c8b7c8b7c8b",
      firstName: "John",
      lastName: "Doe",
      employeeID: "12345",
      phone: "1234567890",
      address: "123 Main St",
      title: "Manager",
    },
  };
  const newState = viewOneEmployeeReducer(initialState, action);
  expect(newState.employee).toEqual({
    _id: "5f4d7c8b7c8b7c8b7c8b7c8b",
    firstName: "John",
    lastName: "Doe",
    employeeID: "12345",
    phone: "1234567890",
    address: "123 Main St",
    title: "Manager",
  });
});

test("addEmployee adds an employee", () => {
  const action = {
    type: addEmployee,
    payload: {
      _id: "5f4d7c8b7c8b7c8b7c8b7c8b",
      firstName: "John",
      lastName: "Doe",
      employeeID: "12345",
      phone: "1234567890",
      address: "123 Main St",
      title: "Manager",
    },
  };
  const newState = addEmployeeReducer(initialState, action);
  expect(newState.employees).toEqual([
    {
      _id: "",
      firstName: "",
      lastName: "",
      employeeID: "",
      phone: "",
      address: "",
      title: "",
    },
  ]);
});

test("updateEmployee updates an employee", () => {
  const action = {
    type: updateEmployee,
    payload: {
      _id: "5f4d7c8b7c8b7c8b7c8b7c8b",
      firstName: "John",
      lastName: "Doe",
      employeeID: "12345",
      phone: "1234567890",
      address: "123 Main St",
      title: "Manager",
    },
  };
  const newState = updateEmployeeReducer(initialState, action);
  expect(newState.employees).toEqual([
    {
      _id: "5f4d7c8b7c8b7c8b7c8b7c8b",
      firstName: "Johnny",
      lastName: "Doee",
      employeeID: "12345",
      phone: "1234567890",
      address: "123 Main St",
      title: "Sr Manager",
    },
  ]);
});

test("deleteEmployee deletes an employee", () => {
  const action = {
    type: deleteEmployee,
    payload: {
      _id: "5f4d7c8b7c8b7c8b7c8b7c8b",
      firstName: "John",
      lastName: "Doe",
      employeeID: "12345",
      phone: "1234567890",
      address: "123 Main St",
      title: "Manager",
    },
  };
  const newState = deleteEmployeeReducer(initialState, action);
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

test("searchTitle returns an array of employees", () => {
  const action = {
    type: searchTitle,
    payload: [
      {
        title: "Manager",
      },
    ],
  };
  const newState = searchTitleReducer(initialState, action);
  expect(newState.employees).toEqual([
    {
      _id: "5f4d7c8b7c8b7c8b7c8b7c8b",
      firstName: "John",
      lastName: "Doe",
      employeeID: "12345",
      phone: "1234567890",
      address: "123 Main St",
      title: "Manager",
    },
  ]);
});

test("searchFirstName returns an array of employees", () => {
  const action = {
    type: searchFirstName,
    payload: [
      {
        _id: "5f4d7c8b7c8b7c8b7c8b7c8b",
        firstName: "John",
      },
    ],
  };
  const newState = searchFirstNameReducer(initialState, action);
  expect(newState.employees).toEqual([
    {
      _id: "5f4d7c8b7c8b7c8b7c8b7c8b",
      firstName: "John",
      lastName: "Doe",
      employeeID: "12345",
      phone: "1234567890",
      address: "123 Main St",
      title: "Manager",
    },
  ]);
});
