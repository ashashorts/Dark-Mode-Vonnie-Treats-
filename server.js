// Import Express
const express = require("express");

// Create Express application
const app = express();

// Used to read form data
app.use(express.urlencoded({ extended: true }));

// Makes files inside public available
app.use(express.static("public"));

// Simple storage array
let users = [];

/* ==================================================
   REGISTER ROUTE
   Accepts username, email, and password.
================================================== */
app.post("/register", function(req, res) {

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    users.push({
        username,
        email,
        password
    });

    res.send(`
        <h1>You have successfully registered</h1>

        <a href="/login.html">
            Go to Login Page
        </a>
    `);
});

/* ==================================================
   LOGIN ROUTE
   Checks username and password.
================================================== */
app.post("/login", function(req, res) {

    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(user =>
        user.username === username &&
        user.password === password
    );

    if(foundUser) {

        res.send(`
            <h1>You have logged in successfully</h1>

            <a href="/login.html">
                Back to Login
            </a>
        `);

    } else {

        res.send(`
            <h1>Login credentials were incorrect</h1>

            <a href="/login.html">
                Try Again
            </a>
        `);
    }
});

/* ==================================================
   START SERVER
================================================== */
app.listen(3000, function() {
    console.log("Server running on http://localhost:3000");
});

