import express from 'express';
import bodyParser from 'body-parser';
import todoRoutes from './routes/todos.js';
import { TodoController } from './controllers/todos.js';

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/todos', todoRoutes);

app.listen(3009, async () => {
  console.log('Server is running on port 3009');
  await TodoController.initTodos();
});
