const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
require("dotenv").config();
const {
  PORT
} = process.env;

conn.sync({ force: false }).then(() => {
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
