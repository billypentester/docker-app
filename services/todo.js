import { dbCon } from '../config/database/connection.js';

const getTodos = async (req, res) => {
    try {
        const [results] = await dbCon.promise().query('SELECT * FROM todo')
        if (!results) {
            return res.status(404).json({ 
                status: false,
                message: 'No todos found' 
            });
        }
        res.status(200).json({
            status: true,
            data: results
        });
    } 
    catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};

const getTodoById = async (req, res) => {
    try {
        const [results] = await dbCon.promise().query('SELECT * FROM todo WHERE id = ?', [req.params.id]);
        if (!results) {
            return res.status(404).json({ status: false, message: 'No todos found' });
        }
        res.status(200).json({
            status: true,
            data: results.length > 0 ? results[0]: null
        });
    } 
    catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};

const createTodo = async (req, res) => {
    const todo = {
        title: req.body.title,
        description: req.body.description,
        is_completed: req.body.is_completed || false
    }

    try {
        const newTodo = await dbCon.promise().query('INSERT INTO todo SET ?', todo);
        if(newTodo.affectedRows === 0) {
            return res.status(400).json({ status: false, message: 'Todo not created' });
        }
        res.status(201).json({ status: true, data: { id: newTodo.insertId, ...todo } });
    } 
    catch (error) {
        res.status(500).json({  status: false, message: error.message });
    }
};

const updateTodo = async (req, res) => {
    try {
        const [todo] = await dbCon.promise().query('SELECT * FROM todo WHERE id = ?', [req.params.id]);
        if(todo.length === 0) {
            return res.status(404).json({ status: false, message: 'Todo not found' });
        }
        const updatedTodo = await dbCon.promise().query('UPDATE todo SET ? WHERE id = ?', [req.body, req.params.id]);
        if(updatedTodo.affectedRows === 0) {
            return res.status(400).json({ status: false, message: 'Todo not updated' });
        }
        res.status(200).json({ status: true, message: 'Todo updated successfully' });
    } 
    catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const deletedTodo = await dbCon.promise().query('DELETE FROM todo WHERE id = ?', [req.params.id]);
        if(deletedTodo.affectedRows === 0) {
            return res.status(404).json({ status: false, message: 'Todo not found' });
        }
        res.status(200).json({ status: true, message: 'Todo deleted successfully' });
    } 
    catch (error) {
        res.status(500).json({  status: false, message: error.message });
    }
};

export { getTodos, getTodoById, createTodo, updateTodo, deleteTodo };