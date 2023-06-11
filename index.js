// Packages
const inquirer = require('inquirer');
const db = require('./config');



const promptQuestions = [
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

const viewAllEmployees = function(){
    let sqlQuery = `SELECT * FROM employee`;
    let params = [];
    db.query(sqlQuery, params, (err, result) => {
        if (err) {
            console.log(err);
            return err;
        }
        console.table(result)
        prompt();
    });
}
const addEmployee = function(){

}
const updateEmployeeRole = function(){

}
const viewAllRoles = function(){
    let sqlQuery = `SELECT * FROM role`;
    let params = [];
    db.query(sqlQuery, params, (err, result) => {
        if (err) {
            console.log(err);
            return err;
        }
        console.table(result)
        prompt();
    });
}
const addRole = function(){

}
const viewAllDepartments = function(){
    let sqlQuery = `SELECT * FROM department`;
    let params = [];
    db.query(sqlQuery, params, (err, result) => {
        if (err) {
            console.log(err);
            return err;
        }
        console.table(result)
        prompt();
    });
}
const addDepartment = function(){

}


const resolveAnswer = function(input){
    switch(input){
        case 'View All Employees':
            viewAllEmployees();
            break;
        case 'Add Employee':
            addEmployee();
            break;
        case 'Update Employee Role':
            updateEmployeeRole();
            break;
        case 'View All Roles':
            viewAllRoles();
            break;
        case 'Add Role':
            addRole();
            break;
        case 'View All Departments':
            viewAllDepartments();
            break;
        case 'Add Department':
            addDepartment();
            break;
        case 'Quit':
            console.log('Bye');
            db.end();
            return;
    }
}

const prompt = () => {
    inquirer.prompt(promptQuestions).then((data) => {
        console.log(data.answer);
        resolveAnswer(data.answer);
    });
}
prompt();