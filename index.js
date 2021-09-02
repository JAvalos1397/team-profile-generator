const inquirer = require("inquirer");
const fs = require('fs');

const generateEP = require('./src/generateEmployee');
// console.log(generateEmployee)
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//arrays
const internArray = [];
const engineerArray = [];
const managerArray = [];

function initApp() {
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
                   var roleInfo = 'Github username';1
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
            .then(({ roleInfo,moreMembers}) => {
               console.log(roleInfo)
                var newMember;
                switch(role) {
                    case 'Engineer': {
                        console.log(roleInfo)
                        newMember = new Engineer(name,id,email,roleInfo)
                        engineerArray.push(generateEP.generateEngineer(newMember))
                        
                        break;
                    }
                    case 'Intern': {
                        newMember = new Intern(name,id,email,roleInfo);
                        internArray.push(generateEP.generateIntern(newMember));
                        break;
                    }
                    case 'Manager': {
                        newMember = new Manager(name,id,email,roleInfo);
                        managerArray.push(generateEP.generateManager(newMember));
                        break;
                    }
                }
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

}


function finishHtml() {
  const arrays = {
      engineers: engineerArray.join(),
      interns: internArray.join(),
      managers: managerArray.join(),
  }
  const markup = generateEP.htmlMarkup(arrays)

   writeUpHtml(markup)
}

function writeUpHtml(markup) {
    fs.writeFile("./dist/index.html", markup, (err) => {
        if (err) {
            console.log(err)
        }
        console.log("Your Team is generated!")
    })
};

initApp();