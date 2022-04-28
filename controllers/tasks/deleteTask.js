import { taskModel } from "../../models/task.js";
export async function deleteTask(req, res) {
  try {
    taskModel.deleteOne({ id: req.params.id }).exec();
    res
      .status(201)
      .json({ message: `User with the id ${req.params.id} was deleted` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
