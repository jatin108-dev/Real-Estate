const express = require("express");
const { login, register, logout } = require("../controllers/authControllers");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);


router.get("/me", protect, (req, res) => {
  res.json(req.user);
});

module.exports = router;