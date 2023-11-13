const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");

app.use(cors()); // Add cors middleware

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("hello welcome to krakow");
});

server.listen(4000, () => "Server is running on port 4000");
// http://localhost:4000/
