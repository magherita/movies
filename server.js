const express = require("express");
const mongoose = require("mongoose");
const dbURI = require("./config/keys").DB_URI;
const users = require("./routes/api/users");

// connect to database
mongoose
    .connect(dbURI, {
        useNewUrlParser: true
    })
    .then(() => console.log("Database connection established"))
    .catch(err => console.log(err));

const app = express();
app.get('/', (req, res) => res.send("Hello world"));

// setup routes
app.use("/api/users", users);

const port = process.env.PORT || 7090;

app.listen(port, () => console.log(`Server started on port ${port}`));