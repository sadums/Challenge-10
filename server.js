const mysql = require('mysql2');
require('dotenv').config();


// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    console.log(`Connected to the courses_db database.`)
);

const getEmployees = async function () {
    let sqlQuery = `SELECT concat(first_name, ' ', last_name) FROM employee`;
    let params = [];
    let globalResult = '';

    db.query(sqlQuery, params, (err, result) => {
        if (err) {
            console.table(err);
            return err;
        }
    });

    return globalResult;

}
const getManagers = function () {
    let sqlQuery = `SELECT concat(first_name, ' ', last_name) FROM employee WHERE manager_id IS NOT NULL`;
    let params = [];

    db.query(sqlQuery, params, (err, result) => {
        if (err) {
            console.log(err);
            return err;
        }
        console.log(result);
        return result;
    });
}
const getRoles = function () {
    let sqlQuery = 'SELECT title FROM role';
    let params = [];

    db.query(sqlQuery, params, (err, result) => {
        if (err) {
            console.log(err);
            return err;
        }
        console.log(result);
        return result;
    });
}
const getDepartments = function () {
    let sqlQuery = 'SELECT name FROM department';
    let params = [];

    db.query(sqlQuery, params, (err, result) => {
        if (err) {
            console.log(err);
            return err;
        }
        console.log(result);
        return result;
    });
}


module.exports = { getEmployees, getManagers, getRoles, getDepartments, db }