const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/todos",async (req,res)=>{
    const todos = await todo.find({})
    res.send(todos);
})

app.post("/todo",async (req,res)=>{
   const createPayload = req.body;
   const parsedPayload = createTodo.safeParse(createPayload);
   if(!parsedPayload.success){
    res.status(411).json({
        msg:"Wrong Inputs"
    })
    return;
   }
   //put in db
   await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
   })
   res.json({
    msg:"Todo Created"
   })
})

app.put("/completed",async (req,res)=>{
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"Wrong Inputs"
        })
        return;
    }
    await todo.updateOne({
        _id:req.body.id
    },{
        completed: true
    })
    res.json("Todo marked as completed")
})

app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`)
})