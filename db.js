const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const dbConnection = async () =>{
    try{
        const connection = mysql.createConnection({
            user: process.env.SERVER_DB_USER,
            password: process.env.SERVER_DB_PASS,
            host: process.env.SERVER_DB_HOST,
            port: process.env. SERVER_DB_PORT
            
        });
        connection.connect();
        return connection;
 } catch(error){
        console.log('Something went wrong while trying to connect to the data base. Error:', error)
    }
};
const createDB = async () =>{

        try{
            const connection = await dbConnection();
            connection.query(`            CREATE DATABASE IF NOT EXISTS events;            `)
            connection.query(`USE events;`);
            connection.query(`
            CREATE TABLE IF NOT EXISTS events (
              id INT PRIMARY KEY AUTO_INCREMENT,
              name VARCHAR(255) NOT NULL,
              description VARCHAR(255) NOT NULL,
              date DATE
            )
          `);
            connection.end();
        }catch(error){
        console.log('Something whent wrong while trying to create the database. Error:', error)
    }
}

module.exports = {
    dbConnection,
    createDB,
}