const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require('fs')
//arrays
const employeeArray = [];
const engineerArray = [];
const internArray = [];
const managerArray = [];

function initApp() {
    startHtml();
    addEmployees();
}

function addEmployees() {
    inquirer.prompt([{
        type: "input",
        Message: "Enter team memeber's name",
        name: "name",
    },
    {
        type: "list",
        Message: "Select team member's role",
        choices: ["Engineer", 'Intern', 'Manager'],
        name: 'role'
    },
    {
        type: "input",
        Message: "Enter team memeber's id",
        name: "id",
    },
    {
        type: "input",
        Message: "Enter team memeber's email",
        name: "email",
    },
])}
.then(function({name, role, id, email}){
    let roleInfo= '';
    switch (role) {
        case 'Engineer': {
            roleInfo = 'Github username';
        break;}
        case 'Intern': {
            roleInfo = 'School name';
        break;}
        case 'Manager': {
            roleInfo = 'Office phone number';
        break;}
    }
})