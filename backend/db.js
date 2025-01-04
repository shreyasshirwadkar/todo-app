const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://shreyasshirwadkar:shreyas1@cluster0.b5u2s.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports={
    todo
}