const bcryptjs = require("bcryptjs");

const User = require("../models/user");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: "User or password are incorrect - email",
      });
    }

    if (!user.status) {
      return res.status(400).json({
        msg: "User or password are incorrect - status: false",
      });
    }

    const validPassword = bcryptjs.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        msg: "User or password are incorrect - password",
      });
    }

    res.json({
      msg: "User logged in",
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Something went wrong",
    });
  }
};

module.exports = {
  login,
};