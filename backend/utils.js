const bcrypt = require("bcrypt");

const hashedPassword = (password) => {
  const hashValue = bcrypt.hashSync(password, 8);
  return hashValue;
};

const comparePassword = (password, hash) => {
  const correctPassword = bcrypt.compareSync(password, hash);

  console.log("correctPassword:", correctPassword);

  return correctPassword;
};

module.exports = {
  hashedPassword,
  comparePassword,
};
