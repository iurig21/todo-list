import { useState } from "react";
import Input from "./Input";

function AddTask({ OnAddTaskClick }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) {
      return alert("O titulo é obrigatório!");
    }
    OnAddTaskClick(title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <div className="bg-zinc-700 p-5 rounded-md shadow-md space-y-4">
      <Input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        onKeyDown={(event) => (event.key === "Enter" ? handleSubmit() : null)}
        type="text"
        name=""
        id=""
        placeholder="Titulo da tarefa"
      />
      <Input
        value={desc}
        onChange={(event) => setDesc(event.target.value)}
        onKeyDown={(event) => (event.key === "Enter" ? handleSubmit() : null)}
        type="text"
        placeholder="Descricao da tarefa (opcional)"
      />
      <button
        className="w-full bg-zinc-800 text-white p-3 rounded-md cursor-pointer font-medium"
        onClick={handleSubmit}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
