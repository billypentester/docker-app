import express from 'express';
import { getTodoById, createTodo, deleteTodo, getTodos, updateTodo } from '../services/todo.js';

const router = express.Router();

router.get('/todo', getTodos);
router.get('/todo/:id', getTodoById);
router.post('/todo', createTodo);
router.patch('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteTodo);

export default router;