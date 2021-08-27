const inquirer = require("inquirer");
const fs = require('fs');

const generateEmployee = require('./src/generateEmployee');

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//arrays
const employeeArray = [];


function initApp() {
    startHtml();
    addEmployee();
}

function addEmployee() {
    inquirer.prompt([{
        type: "input",
        message: "Enter team memeber's name",
        name: "name",
    },
    {
        type: "list",
        message: "Select team member's role",
        choices: ["Engineer", 'Intern', 'Manager'],
        name: 'role'
    },
    {
        type: "input",
        message: "Enter team memeber's id",
        name: "id",
    },
    {
        type: "input",
        message: "Enter team memeber's email",
        name: "email",
    }
    ]).then(({ name, role, id, email }) => {
            const info = role;
            switch (info) {
                case 'Engineer': {
                   var roleInfo = 'Github username';
                    console.log('Engineer')
                    break;
                }
                case 'Intern': {
                    var roleInfo = 'School name';
                    break;
                }
                case 'Manager':
                    var roleInfo = 'Office phone number';
                    break;
                
            }
            inquirer.prompt([{
                type: 'input',
                message: `Enter team member's ${roleInfo}`,
                name: 'roleInfo',
            }, {
                type: 'list',
                message: `Would you like to add another memeber?`,
                choices: ['Yes', 'No'],
                name: 'moreMembers',
            }])
            .then(({roleInfo,moreMembers}) => {
                var newMember;
                switch(role) {
                    case 'Engineer': {
                        newMember = new Engineer(name,id,email,roleInfo)
                        employeeArray.push(generateEngineer(newMember))
                        break;
                    }
                    case 'Intern': {
                        newMember = new Intern(name,id,email,roleInfo);
                        employeeArray.push(generateIntern(newMember));
                        break;
                    }
                    case 'Manager': {
                        newMember = new Manager(name,id,email,roleInfo);
                        employeeArray.push(generateManager(newMember));
                        break;
                    }
                }
                addHtml(newMember).then(() => {
                    switch(moreMembers) {
                        case 'Yes':{
                            addEmployee();
                            break;
                        }
                        case 'No':{
                            finishHtml();
                            break;
                        }
                    }
                })
            })
        })

}


function startHtml(){
    console.log("started")
}
function addHtml(newMember) {
    console.log('added')
}
function finishHtml() {
    console.log(employeeArray)
}
initApp();