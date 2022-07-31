const express = require("express");
// express is a function that returns an object that has a bunch of methods that we can use to create a server
const bodyParser = require("body-parser");
//bodyParser is a middleware that allows us to parse the body of the request
const morgan = require("morgan");
//morgan is a middleware that allows us to log the requests

const {
  // viewOneEmployee,
  viewEmployees,
  addEmployee,
  editEmployee,
  deleteEmployee,
  filterEmployeesbyTitle,
  filterEmployeesbyFirstName,
  adminLogin,
} = require("./data/emps");

const PORT = process.env.PORT || 3002;

express()
  .use(morgan("tiny")) //tiny is the format of the logs we want to see
  .use(bodyParser.json())
  .use(express.static("public"))
  .use(bodyParser.urlencoded({ extended: true }))
  .use("/", express.static(__dirname + "/"))
  //__dirname is a global variable that points to the directory where the script is running

  //endpoints

  .get("/showemployees", viewEmployees) //done
  // .get("/employees/:id", viewOneEmployee) //done
  .post("/employees", addEmployee) //done
  .post("/login", adminLogin) //done
  .put("/employees/:id", editEmployee) //done
  .delete("/employees/:id", deleteEmployee) //done
  .get("/employees/:title", filterEmployeesbyTitle)
  .get("/employees/:firstName", filterEmployeesbyFirstName) //done

  .get("*", (req, res) => {
    res.status(404).send("Page not found");
  })

  .use((req, res) => {
    res.status(404).send({
      message: "Route not found",
    });
  })
  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
