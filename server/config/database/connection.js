import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

console.table([
    { 'DB_HOST': process.env.DB_HOST },
    { 'DB_USER': process.env.DB_USER },
    { 'DB_PASS': process.env.DB_PASS },
    { 'DB_NAME': process.env.DB_NAME },
])

const dbCon = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const connectDB = () => {
        dbCon.connect((err) => {
        if (err) {
            console.error('Database connection failed: ' + err.stack);   
            setTimeout(connectDB, 2000); 
            return;
        }
        console.log(`\x1b[34m - Connected to database instance \x1b[0m`);
    });
}

export { dbCon, connectDB };
