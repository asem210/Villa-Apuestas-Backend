const bcrypt = require("bcrypt");


module.exports = {
  hashPassword: async (plainPassword) => {
    const hash = await bcrypt.hash(plainPassword, 10);
    return hash;
  },
};