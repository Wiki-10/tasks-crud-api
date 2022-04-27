import express from "express";
import { userModel } from "../models/user.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const newUser = new userModel({
    username: req.body.username,
  });
  try {
    const addUser = await newUser.save();
    res.status(201).json(addUser);
  } catch (err) {
    // Send server error in case of an error
    res.status(400).json({ message: err.message });
  }
});

export default router;
