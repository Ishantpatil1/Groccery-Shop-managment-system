const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();


// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL database connection
const db = mysql.createConnection({
    host: 'localhost',      // Replace with your MySQL host
    user: 'root',           // Replace with your MySQL username
    password: '1230',           // Replace with your MySQL password
    database: 'GroceryMart' // Replace with your database name
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL database.');
    }
});


app.use(express.static('public'));

// Handle registration form submission
app.post('/register', (req, res) => {
    const { fullName, email, password, phone, address } = req.body;

    // Insert user data into the database
    const query = `
        INSERT INTO users (full_name, email, password, phone, address) 
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(query, [fullName, email, password, phone, address], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error storing data.');
        } else {
            console.log('User registered successfully.');
            res.status(200).send('Registration successful!');
        }
    });
});

// // Start the server
 app.listen(8000);
