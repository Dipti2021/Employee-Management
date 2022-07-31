"use strict";
//batchimport is a function that takes in the request and response and
//returns a promise that resolves to the result of the database query.

const fs = require("file-system");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

const client = new MongoClient(MONGO_URI, options, {
  useUnifiedTopology: true,
});

const employeedetails = JSON.parse(
  //parsing is done to convert the string into an array
  fs.readFileSync("./employeedetails.json", "utf-8")
  //readFileSync is a method that reads the file synchronously and returns the data as a string
);

const batchImport = async (req, res) => {
  try {
    //try is used to catch errors that may occur in the try block
    await client.connect(); //connect to the database
    const db = client.db("employee_1");
    const result = await db.collection("employee").insertMany(employeedetails);
    //insertMany is a method that inserts many documents into the database
    res.status(200).json({
      message: "Employees added successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding employees",
      error,
    });
  }

  client.close();
};

batchImport();
