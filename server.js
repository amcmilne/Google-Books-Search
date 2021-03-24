const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require("./routes/api");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
require('dotenv').config();


//--------------------------------Middleware---------------------------------------------------//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//-------------------------- Serve up static assets-------------------------------------------//
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//--------------------------------API routes--------------------------------------------------//
app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

//--------------------------------Mongo DB connection-----------------------------------------//
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


app.listen(PORT, () => {
  console.log(`🌎 ==> server now on port ${PORT}!`);
});
  