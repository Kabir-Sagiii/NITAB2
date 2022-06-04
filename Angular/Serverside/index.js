var express = require("express"); // Importing express Modules
var { MongoClient } = require("mongodb"); // Imported Mongodb module
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express(); //Initilising the express Modules
var url =
  "mongodb+srv://mean-1:mean1@mean-1.4jjlx.mongodb.net/?retryWrites=true&w=majority";

var port = 7007; // created the port number

app.use(cors());
app.use(bodyParser());

app.get("/sendData", (req, res) => {
  res.send("Welcome to Express JS"); //     http://localhost:7007/sendData
});

app.get("/sendHtmlData", (req, res) => {
  res.send("<h2>Welcome to Express</h2>"); //  http://localhost:7007/sendHTMLData
});

app.get("/json", (req, res) => {
  res.send({
    results: [
      {
        gender: "female",
        name: { title: "Ms", first: "Valerie", last: "Henderson" },
        location: {
          street: { number: 3103, name: "Depaul Dr" },
          city: "Hobart",
          state: "Northern Territory",
          country: "Australia",
          postcode: 6972,
          coordinates: { latitude: "-82.4827", longitude: "161.9448" },
          timezone: {
            offset: "+2:00",
            description: "Kaliningrad, South Africa",
          },
        },
        email: "valerie.henderson@example.com",
        login: {
          uuid: "6d84275d-52fe-4d0b-b340-a37f31d98b30",
          username: "crazybear681",
          password: "circus",
          salt: "wi952aUl",
          md5: "a623d98ae95b9e3ebcb87d7fedad31e5",
          sha1: "13a2ff1baacb572227258ee3ec549d6ed40dfd7c",
          sha256:
            "26cb3c900c722f32aa091e5140be88cc07286896e6b1fd837dbb70c6c7aa5164",
        },
        dob: { date: "1956-02-07T11:28:31.040Z", age: 66 },
        registered: { date: "2010-01-13T13:12:46.160Z", age: 12 },
        phone: "02-0855-7205",
        cell: "0470-826-138",
        id: { name: "TFN", value: "537505609" },
        picture: {
          large: "https://randomuser.me/api/portraits/women/94.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/94.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/94.jpg",
        },
        nat: "AU",
      },
      {
        gender: "female",
        name: { title: "Miss", first: "Hanaé", last: "Aubert" },
        location: {
          street: { number: 720, name: "Rue Docteur-Bonhomme" },
          city: "Poitiers",
          state: "Haut-Rhin",
          country: "France",
          postcode: 91826,
          coordinates: { latitude: "11.0886", longitude: "100.4574" },
          timezone: { offset: "+7:00", description: "Bangkok, Hanoi, Jakarta" },
        },
        email: "hanae.aubert@example.com",
        login: {
          uuid: "1e3a25d9-5b81-49b1-bb86-02d1cb5edffb",
          username: "biglion777",
          password: "doit",
          salt: "170STuho",
          md5: "32ef3034cbda72abc1048e0a6d510c02",
          sha1: "dfb8ff8a54f33be2680fafd9cb18d2e0aec15a36",
          sha256:
            "80c117d5e8e2b0ed01efac74b9a9d5b7c210659273f3070b40e167e86fe9eeaa",
        },
        dob: { date: "1964-03-30T15:32:33.591Z", age: 58 },
        registered: { date: "2005-06-23T10:08:29.000Z", age: 17 },
        phone: "02-81-88-61-45",
        cell: "06-59-63-13-71",
        id: { name: "INSEE", value: "2NNaN53119760 64" },
        picture: {
          large: "https://randomuser.me/api/portraits/women/44.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/44.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/44.jpg",
        },
        nat: "FR",
      },
    ],
    info: { seed: "5227e6a85f45d95c", results: 2, page: 1, version: "1.3" },
  }); //  http://localhost:7007/json
});

app.get("/getUserData", (req, res) => {
  MongoClient.connect(url, (err, cluster) => {
    if (err) {
      res.send("Error while connecting with DB"); //   http//localhost:7007/getUserData
      console.log(err);
    } else {
      var dbRef = cluster.db("mean1db1");
      var collRef = dbRef.collection("mean1coll1");
      collRef.find().toArray((err, data) => {
        if (err) {
          res.send("Error while accessing the data");
          console.log(err);
        } else {
          res.send(data);
        }
      });
    }
  });
});

app.post("/userdata", (req, res) => {
  var name = req.body.uname;
  var email = req.body.email;
  var password = req.body.password;

  var data = {
    name: name,
    email: email,
    password: password,
  };
  MongoClient.connect(url, (err, cluster) => {
    if (err) {
      res.send("Error while connecting with db"); // http://localhost:7007/userdata
      console.log(err);
    } else {
      var dbRef = cluster.db("mean1db1");
      var collRef = dbRef.collection("mean1coll1");
      collRef.insertOne(data, (err, succ) => {
        if (err) {
          res.send("Error while inserting the data");
          console.log(err);
        } else {
          res.send({
            msg: "Inserted Successfully",
            Ok: true,
          });
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log("Server Started");
});
