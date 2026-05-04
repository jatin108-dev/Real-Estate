const express = require("express");
const mongoose = require("mongoose"); // 🔥 ADD THIS
const protect = require("../middleware/authMiddleware");
const Property = require("../models/Property");

const router = express.Router();

// GET ALL
router.get("/", async (req, res) => {
  try {
    const data = await Property.find();
    console.log("listing",data)
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// 🔥 GET BY ID (FIXED)
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    

    // 🔥 MOST IMPORTANT FIX
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const property = await Property.findById(id);

    if (!property) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json(property);

  } catch (err) {
    console.log(err); // debug
    res.status(500).json({ message: "Server error" });
  }
});

// CREATE
router.post("/", protect, async (req, res) => {
  try {
    const data = await Property.create({
      ...req.body,
      user: req.user._id
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
