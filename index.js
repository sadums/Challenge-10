// Packages
const inquirer = require('inquirer');
const {createRequest, readRequest, updateRequest, deleteRequest} = require('./server');

const firstQuestions = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'answer',
        choices: [
            'View All Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'Quit'
        ]
    }
];

const addEmployeeQuestions = [
    {
        
    }
]

const updateEmployeeQuestions = [
    {

    }
]

const addRoleQuestions = [
    {

    }
]

const addDepartmentQuestions = [
    {

    }
]

const main = function(){
    inquirer.prompt(firstQuestions).then((data) => {
        console.log(data.answer);
        switch(data.answer){
            case 'View All Employees':
                console.log(readRequest("employee"));
                break;
            case 'Add Employee':
                inquirer.prompt(addEmployeeQuestions).then((data) => {
                    console.log(data)
                });
                break;
            case 'Update Employee Role':
                inquirer.prompt(addEmployeeQuestions).then((data) => {
                    console.log(data)
                });
                break;
            case 'View All Roles':
                console.log(readRequest("role"));
                break;
            case 'Add Role':
                inquirer.prompt(addEmployeeQuestions).then((data) => {
                    console.log(data)
                });
                break;
            case 'View All Departments':
                console.log(readRequest("department"));
                break;
            case 'Add Department':
                inquirer.prompt(addEmployeeQuestions).then((data) => {
                    console.log(data)
                });
                break;
            case 'Quit':
                return;
        }
        main()
    });
}

main();