import moongose from "mongoose";
const { Schema } = moongose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    default: Date.now,
  },
  isCompleted: {
    type: Boolean,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  comments: {
    type: String,
    required: false,
  },
  responsible: {
    type: String,
    required: false,
  },
  tags: {
    type: String,
    required: false,
  },
});

export const taskModel = moongose.model("tasks", taskSchema);
