import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    
    return <div>
        <input style={{padding:10, margin:10}} type="text" placeholder="title" onChange={function(e){
            const val = e.target.value;
            setTitle(val);
        }} ></input><br/><br/>
        <input style={{padding:10, margin:10}} type="text" placeholder="description" onChange={function(e){
            const val = e.target.value;
            setDescription(val);
        }} ></input> <br/> <br/>
        <button style={{padding:10, margin:10}} 
        onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description,
                }),
                headers:{
                    "Content-type":"application/json"
                }
            }).then(async function(res){
                const json = await res.json();
                alert("TOdo created");
            })
        }}
        >Add todo</button>

    </div>
}