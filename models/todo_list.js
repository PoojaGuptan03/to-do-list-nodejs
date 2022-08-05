const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    dueDate:{
        type: Date
    }
})

const Todo = mongoose.model('Todo',todoSchema);
module.exports = Todo; 