import { userModel } from "../../models/user.js";

export async function getUser(req, res) {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
