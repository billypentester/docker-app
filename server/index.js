import express from 'express'
import todoRouter from './router/todo.js'
import { connectDB } from './config/database/connection.js'
import dotenv from 'dotenv';
const app = express()
dotenv.config();
const port = process.env.PORT || 3000

connectDB()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Todo API'
    })
})
app.use('/api', todoRouter)
app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found'
    })
})


app.listen(port, () => {
    console.log(`\x1b[33m - App is listening on port: ${port}! \x1b[0m`)
})