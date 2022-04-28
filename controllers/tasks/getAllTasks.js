import { taskModel } from "../../models/task.js";
export async function getAllTasks(req, res) {
  try {
    const all = await taskModel.find();
    res.json(all);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
