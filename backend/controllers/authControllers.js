const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: "User exists" });

  const user = await User.create({ name, email, password });

  generateToken(res, user._id);

  res.json(user);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && await user.matchPassword(password)) {
    generateToken(res, user._id);
    res.json(user);
  } else {
    res.status(400).json({ message: "Invalid creds" });
  }
};
const logout = (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
        sameSite: "none",
      expires: new Date(0)
    })
    .json({ message: "Logged out" });
};

module.exports = { login, register, logout };

// const logout = (req, res) => {
//   res.cookie("token", "", { expires: new Date(0) });
//   res.json({ message: "Logged out" });
// };

// module.exports = { register, login, logout };
