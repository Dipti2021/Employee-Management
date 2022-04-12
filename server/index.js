const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

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

const PORT = process.env.PORT || 3001;

express()
  .use(morgan("tiny"))
  .use(bodyParser.json())
  .use(express.static("public"))
  .use(bodyParser.urlencoded({ extended: true }))
  .use("/", express.static(__dirname + "/"))

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
