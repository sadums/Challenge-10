// Packages
const { response } = require('express');
const inquirer = require('inquirer');


const main = [
    {
        type: "list",
        name: "main",
        message: "What would you like to do?",
        choices: [
            "Edit Employees",
            "Edit Roles",
            "Edit Departments",
            "Clear Terminal",
            "Quit"
        ]
    }
];

const employees = [
    {
        type: "list",
        name: "answer",
        message: "Editing Employees...\nWhat would you like to do?",
        choices: [
            "Add an Employee",
            "View Employees",
            "Update an Employee",
            "Delete an Employee",
            "Return"
        ]      
    }
]
const roles = [
    {
        type: "list",
        name: "answer",
        message: "Editing Roles...\nWhat would you like to do?",
        choices: [
            "Add a Role",
            "View Roles",
            "Update a Role",
            "Delete a Role",
            "Return"
        ]      
    }
]
const departments = [
    {
        type: "list",
        name: "answer",
        message: "Editing Departments...\nWhat would you like to do?",
        choices: [
            "Add a Department",
            "View Departments",
            "Update a Department",
            "Delete a Department",
            "Return"
        ]      
    }
]

function startQuestion(){
    inquirer.prompt(main).then((response) => {
        switch(response.main){
            case "Edit Employees":
                inquirer.prompt(employees).then((response) => console.log(response));
                break;
            case "Edit Roles":
                inquirer.prompt(roles).then((response) => console.log(response));
                break;
            case "Edit Departments":
                inquirer.prompt(departments).then((response) => console.log(response));
                break;
            case "Clear Terminal":
                console.clear();
                console.log("Terminal cleared.");
                startQuestion();
                break;
            case "Quit":
                return;
        }
    });
}

startQuestion();