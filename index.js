// Importing the http module
const http = require("node:http")

// Importing the express package
const express = require("express")
const app = express()

// HTTP ---------------------------------------------------
// Creating http module server 
const server = http.createServer((req, res) => {
  // Sending the response
  res.write("This is the response from the server")
  res.end();
})

// Http server listening to port 3000
server.listen((3000),  ()  =>  {
  console.log("Server is Running");
})

// EXPRESS.JS --------------------------------------------
// Handling GET / request
app.use("/", (req,  res,  next) => {
  res.send("This is the express server")
})

// Handling GET /hello request
app.get("/hello",  (req,  res,  next) => {
  res.send("This is the hello response");
})

// Server setup
app.listen(4000, () => {
  console.log("Server is Running")
})