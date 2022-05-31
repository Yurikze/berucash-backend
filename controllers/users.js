const bcrypt = require('bcryptjs');
const User = require('../models/user');

module.exports.createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashPassword });
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};
