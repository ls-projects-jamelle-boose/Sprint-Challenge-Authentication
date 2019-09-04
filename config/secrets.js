const config = require("./config");

module.exports = {
  jwtSecret: config.env.JWT_SECRET
};
