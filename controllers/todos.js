import { Todo } from '../models/todo.js';

class todoController {
  constructor() {
    this.TODOS = [];
  }

  createTodo(req, res) {
    const task = req.body.task;
    const newTodo = new Todo(Math.random().toString(), task);
    this.TODOS.push(newTodo);
    res.json({
      message: 'created new todo object',
      newTask: newTodo,
    });
  }

  getTodos(req, res) {
    res.json({ tasks: this.TODOS });
  }

  updateTodo(req, res) {
    const todoId = req.params.id;
    const updatedTask = req.body.task;
    const todoIndex = this.TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
      res.json({ message: 'Could not find todo with such index' });
      throw new Error('Could not find todo');
    }
    this.TODOS[todoIndex] = new Todo(this.TODOS[todoIndex].id, updatedTask);
    res.json({
      message: 'Todo is updated',
      updatedTask: this.TODOS[todoIndex],
    });
  }

  deleteTodo(req, res) {
    // get id from url params
    const todoId = req.params.id;
    // search for matching todo's index in array
    const todoIndex = this.TODOS.findIndex((todo) => todo.id === todoId);

    if (todoIndex < 0) {
      res.json({
        message: 'Could not find todo with such index',
      });
      throw new Error('Could not find todo');
    }

    // remove found todo from array
    const deletedTodo = this.TODOS.splice(todoIndex, 1)[0];
    res.json({
      message: 'Todo is deleted',
      deletedTask: deletedTodo,
    });
  }
}

export const TodoController = new todoController();
