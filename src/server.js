const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const { Country } = require('./db.js');
const {
  HOST
} = process.env;

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
})

server.use(router);

module.exports = server;
