import { TodoModel } from "../models/todo.js";

export const addTodo = async (req, res, next) => {
  try {
    await TodoModel.create(req.body);
    res.status(201).json("todo was added");
  } catch (error) {
    next(error);
  }
};

export const getTodos = async (req, res, next) => {
  try {
    // Fetch todos from database
    const todos = await TodoModel.find();
    // Return Response
    res.status(200).json(todos);
  } catch (error) {
    next(error)
  }
};

export const updateTodo = (req, res, next) => {
  res.json("Todo updated");
};

export const deleteTodo = (req, res, next) => {
  res.json("Todo deleted!");
};
