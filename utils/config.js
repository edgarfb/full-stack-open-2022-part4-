require("dotenv").config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const PASSWORD = process.env.PASS;
const DATA_BASE = process.env.DATA_BASE;

module.exports = {
  MONGODB_URI,
  PORT,
};
