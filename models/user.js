import moongose from "mongoose";
const { Schema } = moongose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
});

export const userModel = moongose.model("users", userSchema);
