
import mysql from 'mysql2';


export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "oneup_users_db",
    port: 3306
  })


  db.connect(err => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
  
    db.query('SELECT 1', (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
      } else {
        console.log('Database connection successfully tested');
      }
    });
  });