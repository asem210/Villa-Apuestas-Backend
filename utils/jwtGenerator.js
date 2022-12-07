const bcryptjs = require("bcryptjs");


module.exports = {
  hashPassword: async (plainPassword) => {
    const hash = await bcryptjs.hash(plainPassword, 8);
    return hash;
  },
};