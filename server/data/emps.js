"use strict";

const { MongoClient } = require("mongodb");
// const assert = require("assert");
require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true, // remove these lines if having issue with mongoose
  useUnifiedTopology: true,
};

const viewEmployees = async (req, res) => {
  //view all employees
  const client = new MongoClient(MONGO_URI, options); //connect to mongo
  const db = client.db("employee_1");
  try {
    await client.connect(); // async await is used to wait for the connection to be established
    const result = await db.collection("employee").find({}).toArray();
    //find({}) is used to find all documents in the collection
    res.status(200).json({
      message: "Employees retrieved successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving employees",
      error,
    });
  }
  client.close();
};

const addEmployee = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("employee_1");
  const { employeeID, firstName, lastName, address, phone, title } = req.body; //
  // const id = uuidv4();

  const employee = {
    // _id: id,
    employeeID,
    firstName,
    lastName,
    phone,
    address,
    title,
  };
  try {
    await client.connect();
    const result = await db.collection("employee").insertOne(employee);
    res.status(200).json({
      message: "Employee added successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding employee",
      error,
    });
  }
  client.close();
};

//edit employee
const editEmployee = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("employee_1");
  const { employeeID, firstName, lastName, address, phone, title } = req.body;
  // const id = uuidv4();
  //add id and _id before sending to db
  const employee = {
    // _id: id,
    employeeID,
    firstName,
    lastName,
    address,
    phone,
    title,
  };
  try {
    await client.connect();
    const result = await db
      .collection("employee")
      .updateOne({ employeeID: employeeID }, { $set: employee });
    res.status(200).json({
      message: "Employee updated successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating employee",
      error,
    });
  }
  client.close();
};

//delete employee
const deleteEmployee = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("employee_1");
  const { employeeID } = req.body;
  try {
    await client.connect();
    const result = await db
      .collection("employee")
      .deleteOne({ employeeID: employeeID });
    res.status(200).json({
      message: "Employee deleted successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting employee",
      error,
    });
  }
  client.close();
};

//filter employees
const filterEmployeesbyTitle = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("employee_1");
  const { title } = req.body;
  try {
    await client.connect();
    const result = await db

      .collection("employee")
      .find({ title: title })
      .toArray();
    res.status(200).json({
      message: "Employee retrieved successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving employees",
      error,
    });
  }
  client.close();
};

const adminLogin = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("employee_1");
  const { username, password } = req.body;
  try {
    await client.connect();
    const result = await db
      .collection("admin")
      .findOne({ username: username, password: password });
    if (username === "username" && password === "password") {
      res.status(200).json({
        message: "Admin login successfully",
        result,
      });
    } else {
      res.status(500).json({
        message: "Error login",
        error,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error login",
      error,
    });
  }
  client.close();
};

//   try {
//     await client.connect();
//     const result = await db.collection("admin").findOne({ username, password });
//     res.status(200).json({
//       message: "Admin login successful",
//       result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error logging in admin",
//       error,
//     });
//   }
//   client.close();
// };

const filterEmployeesbyFirstName = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("employee_1");
  const { firstName } = req.body;
  try {
    await client.connect();
    const result = await db
      .collection("employee")
      .find({ firstName: firstName })
      .toArray();
    res.status(200).json({
      message: "Employees retrieved successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving employees",
      error,
    });
  }
  client.close();
};

module.exports = {
  viewEmployees,
  addEmployee,
  editEmployee,
  deleteEmployee,
  filterEmployeesbyTitle,
  filterEmployeesbyFirstName,
  adminLogin,
};
