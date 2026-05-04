const jwt = require("jsonwebtoken");

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d"
  });

  res.cookie("token", token, {
    httpOnly: true,
     secure:true,
    sameSite: "none"
  });
};

module.exports = generateToken;
