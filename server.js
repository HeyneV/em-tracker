const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql');
const cTable=require('console.table')
 

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // {TODO: Add your MySQL password}
    password: 'Myskier2009!',
    database: 'employee'
  },
  console.log(`Connected to the employee_db database.`)
);

askQuestion()

//  I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

function askQuestion (){
  inquirer.prompt([
      {
        type: "list", 
        name: "menu",
        message: "What do you want to do?",
        choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
      }
  ])
  .then (function(response){
       switch(response.menu){
           case "view all departments":
             viewDepartments()
             break;
             case "view all roles":
             viewRoles()
             break;
             case "view all employees":
              viewEmployees()
              break;
              case "add a department":
                addDepartment()
                break;
                case "add a role":
                  addRole()
                  break;
                  case "add an employee":
                    addEmployee()
                    break;
                    case "update an employee role":
                      updateEmployeeRole()
                      break;

       }
  })
}
function updateEmployeeRole(){

}
function addEmployee(){

}
function addRole(){

}
function addDepartment(){

}

function viewEmployees(){

}
function viewRoles(){

}

function viewDepartments(){
     
  db.query("select * from department", function(err,data){
    console.table(data)
    askQuestion()
  })

}


// // Query database
// let deletedRow = 2;

// db.query(`DELETE FROM employee WHERE id = ?`, deletedRow, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// // Query database
// db.query('SELECT * FROM employee', function (err, results) {
//   console.log(results);
// });

 