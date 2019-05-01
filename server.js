const express = require("express");
const mongoose = require("mongoose");
const dbURI = require("./config/keys").DB_URI;
const users = require("./routes/api/users");
const bodyParser = require("body-parser");
const passport = require("passport");

// connect to database
mongoose
    .connect(dbURI, {
        useNewUrlParser: true
    })
    .then(() => console.log("Database connection established"))
    .catch(err => console.log(err));

const app = express();

// setup body-parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));

// setup passport middleware
app.use(passport.initialize());

// configure passport 
require("./config/passport")(passport);

app.use(bodyParser.json());

// setup routes
app.use("/api/users", users);

const port = process.env.PORT || 7090;

app.listen(port, () => console.log(`Server started on port ${port}`));