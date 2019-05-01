const express = require("express");
const mongoose = require("mongoose");
const dbURI = require("./config/keys").DB_URI;
const users = require("./routes/api/users");
const bodyParser = require("body-parser");

// connect to database
mongoose
    .connect(dbURI, {
        useNewUrlParser: true
    })
    .then(() => console.log("Database connection established"))
    .catch(err => console.log(err));

const app = express();
app.get('/', (req, res) => res.send("Hello world"));

// setup body-parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

// setup routes
app.use("/api/users", users);

const port = process.env.PORT || 7090;

app.listen(port, () => console.log(`Server started on port ${port}`));