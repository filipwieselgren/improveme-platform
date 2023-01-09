const bcrypt = require("bcrypt");

const hashedPassword = (password) => {
  const hashValue = bcrypt.hashSync(password, 8);
  return hashValue;
};

module.exports = {
  hashedPassword,
};
