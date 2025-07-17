import { useState } from "react";
import Input from "./Input"

function AddTask({OnAddTaskClick}) {

  const[title,setTitle] = useState("");
  const[desc,setDesc] = useState("");

  return(
    <div className="bg-zinc-700 p-5 rounded-md shadow-md space-y-4">
        <Input value={title} onChange={(event) => setTitle(event.target.value)} type="text" name="" id="" placeholder="Titulo da tarefa"/>
        <Input value={desc} onChange={(event) => setDesc(event.target.value)} type="text"placeholder="Descricao da tarefa"/>
        <button className="w-full bg-zinc-800 text-white p-3 rounded-md cursor-pointer font-medium" onClick={() => {
          if(!title.trim() || !desc.trim()){
            return alert("Precisa inserir os dois campos!");
          }
          OnAddTaskClick(title,desc);
          setTitle("");
          setDesc("");
        } }>Adicionar</button>
    </div>
  )
}

export default AddTask;
