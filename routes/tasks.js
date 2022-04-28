import express from "express";

import { userModel } from "../models/user.js";
import { getAllTasks } from "../controllers/tasks/getAllTasks.js";
import { getTask } from "../controllers/tasks/getTask.js";
import { deleteTask } from "../controllers/tasks/deleteTask.js";
import { postTask } from "../controllers/tasks/postTask.js";
import { updateTask } from "../controllers/tasks/updateTask.js";

const router = express.Router();

// Defining function to authenticate if a user exists in a database

const authenticate = async (req, res, func) => {
  try {
    const user = await userModel.exists({ username: `${req.params.username}` });
    if (user === null) {
      return res.status(404).json({ message: "Cant find user" });
    } else {
      func(req, res);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

router.get("/:username/all", async (req, res) => {
  authenticate(req, res, getAllTasks);
});

router.post("/:username/addTask", async (req, res) => {
  authenticate(req, res, postTask);
});

router.get("/:username/:id", async (req, res) => {
  authenticate(req, res, getTask);
});

router.delete("/:username/:id", async (req, res) => {
  authenticate(req, res, deleteTask);
});

router.put("/:username/:id", async (req, res) => {
  authenticate(req, res, updateTask);
});
export default router;
