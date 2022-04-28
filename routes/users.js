import express from "express";
import { userModel } from "../models/user.js";
import { getUser } from "../controllers/users/getUser.js";
import { postUser } from "../controllers/users/postUser.js";

const router = express.Router();

// Get the list of defined users
router.get("/", async (req, res) => {
  getUser(req, res);
});

// post a new user into the database this user is capable of doing querys
router.post("/", async (req, res) => {
  postUser(req, res);
});

export default router;
