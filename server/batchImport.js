"use strict";

const fs = require("file-system");
const { MongoClient } = require("mongodb");
// const mongoose = require("mongoose");
const assert = require("assert");
const dotenv = require("dotenv");
// const { v4: uuidv4 } = require("uuid");

const client = new MongoClient(MONGO_URI, options, {
  useUnifiedTopology: true,
});

const employeedetails = JSON.parse(
  fs.readFileSync("./employeedetails.json", "utf-8")
);

const batchImport = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("employee_1");
    const result = await db.collection("employee").insertMany(employeedetails);
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
