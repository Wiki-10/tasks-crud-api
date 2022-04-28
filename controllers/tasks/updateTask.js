import { taskModel } from "../../models/task.js";
export async function updateTask(req, res) {
  taskModel.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send("Sucessfully updated");
    }
  });
}
