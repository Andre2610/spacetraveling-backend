require("dotenv").config();

module.exports = {
  SALT_ROUNDS: 10,
  PORT: process.env.PORT || 5000,
};