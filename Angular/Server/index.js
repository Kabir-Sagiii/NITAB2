var express = require("express"); // Importing express Module
var { MongoClient } = require("mongodb"); // Importing Mongodb module
var cors = require("cors");
var bodyparser = require("body-parser");

var app = express();
var port = 8008;
var url =
  "mongodb+srv://meanuser:meanuser@cluster0.mgdlsnx.mongodb.net/?retryWrites=true&w=majority";

app.use(cors()); // Configuring the cors

app.use(bodyparser());

app.get("/firstendpoint", (req, res) => {
  res.send("Welcome To Express JS"); //  http://localhost:8008/firstendpoint
});

app.get("/html", (req, res) => {
  res.send("<h2>Welcome to Express with NodeJS</h2>"); //http://localhost:8008/html
});

app.get("/json", (req, res) => {
  res.send({ name: "NIT", City: "Delhi" }); //http://localhost:8008/json
});

app.get("/getuserdata", (req, res) => {
  MongoClient.connect(url, (error, cluster) => {
    if (error) {
      res.send("Error while connecting with DB,Please try after sometime");
      console.log(error);
    } else {
      var dbRef = cluster.db("AB28AMdb");
      var collRef = dbRef.collection("users"); // http://localhost:8008/getuserdata
      collRef.find().toArray((err, data) => {
        if (err) {
          res.send("Error while getting  the data");
          console.log(err);
        } else {
          res.send(data);
        }
      });
    }
  });
});

app.post("/insertdata", (req, res) => {
  var name = req.body.name;
  var password = req.body.password;
  var email = req.body.email;

  var data = {
    name: name,
    password: password,
    email: email,
  };

  MongoClient.connect(url, (err, cluster) => {
    //http://localhost:8008/insertdata
    if (err) {
      res.send("error while connecting");
      console.log(err);
    } else {
      var dbRef = cluster.db("AB28AMdb");
      var collRef = dbRef.collection("users");

      collRef.insertOne(data, (err, succMsg) => {
        if (err) {
          res.send("Error while inserting the data");
        } else {
          res.send({
            msg: "Inserted Successfully",
            ok: true,
          });
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log("Server is Started");
});
