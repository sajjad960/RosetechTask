import * as fs from 'fs';
import * as mysql from 'mysql2';
import * as dotenv from 'dotenv';

dotenv.config();

// Read the SQL file content
const sqlContent =   fs.readFileSync(`${__dirname}/students.sql`, "utf-8")
// Split SQL file content into individual queries
const queries = sqlContent.split(';');


// Create a pool for database connections
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "mysql",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Acquire a connection from the pool
pool.getConnection((err, connection) => {
    if (err) throw err;
   
    // Create and use the database
    connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`, (err) => {
      if (err) throw err;
  
      connection.query(`USE ${process.env.DB_NAME}`, (err) => {
        if (err) throw err;
  
        // Execute each query one by one
        queries.forEach((query) => {
          if (query.trim() !== '') {
            connection.query(query, (err, results) => {
              if (err) throw err;
              console.log('Query executed successfully');
            });
          }
        });
  
        // Release the connection back to the pool
        connection.release();
  
        // Close the pool
        pool.end();
      });
    });
  });