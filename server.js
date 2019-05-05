const express = require("express");
const mongoose = require("mongoose");
const dbURI = require("./config/keys").DB_URI;
const users = require("./routes/api/users");
const movies = require("./routes/api/movies");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

// connect to database
mongoose
  .connect(dbURI, {
    useNewUrlParser: true
  })
  .then(() => console.log("Database connection established"))
  .catch(err => console.log(err));

const app = express();

// setup body-parser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// setup passport middleware
app.use(passport.initialize());

// configure passport
require("./config/passport")(passport);

app.use(bodyParser.json());

// setup routes
app.use("/api/users", users);
app.use("/api/movies", movies);

// serve static assets in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 7090;

app.listen(port, () => console.log(`Server started on port ${port}`));
