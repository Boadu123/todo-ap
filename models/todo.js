import { Schema, model } from "mongoose";

const todoSchema = new Schema({
  title: { type: String, required: true },
  icon: {type: String, required: true},
  completed: { type: Boolean, default: false },
}, {
  timestamps: true
});

todoSchema.index({name: "text", title: "text"})

export const TodoModel = model("Todo", todoSchema);
