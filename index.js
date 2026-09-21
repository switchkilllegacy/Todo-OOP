import express from 'express';
import bodyParser from 'body-parser';
import todoRoutes from './routes/todos.js';

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/todos', todoRoutes);

app.listen(3009, () => {
  console.log('Server is running on port 3009');
});
