// importing packages
const express = require("express");
const admin = require("firebase-admin");
const bcrypt = require("bcrypt");
const path = require("path");

// declare static path
let staticPath = path.join(__dirname, "public");

// initializing express.js
const app = express();

// middlewares
app.use(express.static(staticPath));

// routes
// home route
app.get("/", (req, res) => {
  res.sendFile(path.join(staticPath, "home.html"));
});

// buy route
app.get("/buy", (req, res) => {
    res.sendFile(path.join(staticPath, "buy.html"));
});

// sell route
app.get("/sell", (req, res) => {
    res.sendFile(path.join(staticPath, "sell.html"));
});

// rent route
app.get("/rent", (req, res) => {
  res.sendFile(path.join(staticPath, "rent.html"));
});

// login route
app.get("/login", (req, res) => {
    res.sendFile(path.join(staticPath, "login.html"));
});

// signup route
app.get("/signup", (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
});

// adminlogin route
app.get("/adminlogin", (req, res) => {
    res.sendFile(path.join(staticPath, "adminlogin.html"));
});

// profile route
app.get("/profile", (req, res) => {
    res.sendFile(path.join(staticPath, "profile.html"));
});

// adminlogin route
app.get("/adminprofile", (req, res) => {
    res.sendFile(path.join(staticPath, "adminprofile.html"));
});

// 404 route
// app.get("/404", (req, res) => {
//   res.sendFile(path.join(staticPath, "404.html"));
// });

// app.use((req, res) => {
//   res.redirect("/404");
// });

// app.listen(3000, () => {
//   console.log("listening on port 3000....");
// });


// from index.js
'use strict';
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const studentRoutes = require('./routes/student-routes');
const userRoutes = require('./routes/user-routes');
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api', studentRoutes.routes);
app.use('/api', userRoutes.routes);
app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));