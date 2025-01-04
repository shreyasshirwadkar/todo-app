const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/todos",(req,res)=>{
    res.send("todos");
})

app.post("/todo",(req,res)=>{
   const createPayload = req.body;
   const parsedPayload = createTodo.safeParse(createPayload);
   if(!parsedPayload.success){
    res.status(411).json({
        msg:"Wrong Inputs"
    })
    return;
   }
   //put in db
})

app.put("/completed",(req,res)=>{
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"Wrong Inputs"
        })
        return;
    }
})

app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`)
})