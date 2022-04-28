export async function postUser(req, res) {
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
}
