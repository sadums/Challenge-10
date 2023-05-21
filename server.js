const mysql = require('mysql2');
require('dotenv').config();

console.log(process.env.DB_USER + "   " + process.env.DB_PASSWORD);


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

// CRUD functions
const createRequest = () => {
    db.query(`query`, inputs, (err, result) => {
        if (err) {
        console.log(err);
        }
        console.log(result);
    });
};
const readRequest = () => {
    db.query(`query`, inputs, (err, result) => {
        if (err) {
        console.log(err);
        }
        console.log(result);
    });
};
const updateRequest = () => {
        db.query(`query`, inputs, (err, result) => {
        if (err) {
        console.log(err);
        }
        console.log(result);
    });
};
const deleteRequest = () => {
        db.query(`query`, inputs, (err, result) => {
        if (err) {
        console.log(err);
        }
        console.log(result);
    });
};

module.exports = {createRequest, readRequest, updateRequest, deleteRequest}