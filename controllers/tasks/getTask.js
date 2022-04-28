import { taskModel } from "../../models/task.js";
export async function getTask(req, res) {
  try {
    const task = await taskModel.findById(req.params.id);
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
