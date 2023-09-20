// Express is a node library, so it must be installed using a package handler
// We're going to use NPM - Node Package Manager
const express = require("express");
const server = express();
server.use(express.json()); // This API only deals in JSON data - in and out

/* 
HTTP Verbs
GET: Reading data - Should only really send back data without manipulation - GET does not accept body
POST: Creating or sending new data - Should create db entries or manipulate requests
PUT: Updating data in a replacement style - Should replace a db entry with new~ data
PATCH: Update data that currently exists - Should update part of a db entry
DELETE: Deleting data - DELETE does not accept body
*/

const db = [];

server.get("/", function (req, res) {
  res.send(db);
});

server.post("/", function (req, res) {
  // insert new info into the db
  console.log(req.body);
  db.push(req.body);
  res.sendStatus(201);
});

server.put("/", function (req, res) {
  let msg = "Not updated";
  for (let i = 0; i < db.length; i++) {
    if (db[i].username === req.body.username) {
      db[i].pass = req.body.pass;
      msg = "Updated";
    }
  }
  res.status(202).send(msg);
});

server.delete("/:index", function (req, res) {
  // With Delete we have to send data by param or query
  // console.log(req.params.index);
  // console.log(req.query.age);
  db.splice(req.params.index, 1);
  res.sendStatus(200);
});

/* 
psuedo server example
const server = {
  "/": {
    get: function,
    post: function,
    put: function,
    patch: function,
    delete: function
  },
  "/get-request": {
    get: function,
    post: function,
    put: function,
    patch: function,
    delete: function
  }
}
*/

server.listen(5001, function () {
  console.log("Server is running");
});
