// Packages
const inquirer = require('inquirer');


const firstQuestion = [
    {
        type: "list",
        name: "answer",
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

const generateQuestion = function(sectionName){
    let section = [
        {
            type: "list",
            name: "answer",
            message: `Editing ${sectionName}...\nWhat would you like to do?`,
            choices: [
                `Add an ${sectionName.slice(0, -1)}`,
                `View ${sectionName}`,
                `Update an ${sectionName.slice(0, -1)}`,
                `Delete an ${sectionName.slice(0, -1)}`,
                "Return"
            ]      
        }
    ];
    return section;
}


const createRequest = (sectionName) => {

}
const readRequest = (sectionName) => {

}
const updateRequest = (sectionName, id) => {

}
const deleteRequest = (sectionName, id) => {

}


const generateQuestionQuestions = (response, sectionName) => {
    switch(response.answer){
        case `Add an ${sectionName.slice(0, -1)}`:
            console.log(sectionName + " CREATE");
            createRequest(sectionName);
            break;
        case `View ${sectionName}`:
            console.log(sectionName + " READ");
            readRequest(sectionName);
            break;
        case `Update an ${sectionName.slice(0, -1)}`:
            console.log(sectionName + " UPDATE");
            updateRequest(sectionName);
            break;
        case `Delete an ${sectionName.slice(0, -1)}`:
            console.log(sectionName + " DELETE");
            deleteRequest(sectionName);
            break;
        case "Return":
            startQuestion();
            break;
    }
}




function startQuestion(){
    inquirer.prompt(firstQuestion).then((response) => {
        switch(response.answer){
            case "Edit Employees":
                inquirer.prompt(generateQuestion("Employees")).then((response) => generateQuestionQuestions(response, "Employees"));
                break;
            case "Edit Roles":
                inquirer.prompt(generateQuestion("Roles")).then((response) => generateQuestionQuestions(response, "Roles"));
                break;
            case "Edit Departments":
                inquirer.prompt(generateQuestion("Departments")).then((response) => generateQuestionQuestions(response, "Departments"));
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