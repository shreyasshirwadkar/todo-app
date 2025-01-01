const express = require("express")
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/todos",(req,res)=>{
    res.send("todos");
})

app.post("/todo",(req,res)=>{
    const todo = req.body.todo;
    res.json({
        msg:"Created Todo"
    })
})

app.put("/completed",(req,res)=>{
    res.json({
        msg:"Updated Todo"
    })
})

app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`)
})