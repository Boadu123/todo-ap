import { TodoModel } from "../models/todo.js";
import { addTodoValidator, updateTodoValidator } from "../validators/todo.js";

export const addTodo = async (req, res, next) => {
  try {
    const { error, value } = addTodoValidator.validate({
      ...req.body,
      icon: req.file?.filename,
    });
    if (error) {
      return res.status(422).json(error);
    }
    await TodoModel.create(value);
    res.status(201).json("todo was added");
  } catch (error) {
    next(error);
  }
};

export const getTodos = async (req, res, next) => {
  try {
    // Fetch todos from database
    // console.log(req.query)
    const { filter = "{}", limit = 10, skip = 0 } = req.query;
    const todos = await TodoModel.find(JSON.parse(filter))
      .limit(limit)
      .skip(skip);
    // Return Response
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

export const updateTodo = (req, res, next) => {
  res.json("Todo updated");
};

export const deleteTodo = (req, res, next) => {
  res.json("Todo deleted!");
};
