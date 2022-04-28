import { taskModel } from "../../models/task.js";
export async function postTask(req, res) {
  const newTask = new taskModel({
    title: req.body.title,
    description: req.body.description,
    isCompleted: req.body.isCompleted,
    dueDate: new Date(req.body.dueDate),
    comments: req.body.comments,
    responsible: req.body.responsible,
    tags: req.body.tags,
  });
  try {
    const addTask = await newTask.save();
    res.status(201).json(addTask);
  } catch (err) {
    // Send server error in case of an error
    res.status(400).json({ message: err.message });
  }
}
