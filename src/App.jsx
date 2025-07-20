import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const storedTasks = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState(
    storedTasks ? JSON.parse(storedTasks) : []
  );

  useEffect(
    () => localStorage.setItem("tasks", JSON.stringify(tasks)),
    [tasks]
  );

  useEffect(() => {
    async function Apidata() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/?_limit=10",
        {
          method: "GET",
        }
      );
      const responseJSON = await response.json();
      setTasks(responseJSON);
    }
    // Apidata(); //Tarefas podem vir de uma API, se quiser
  }, []); // Lista vazia para que a função so seja executada na 1a vez que o usuario entrar na aplicação

  function OnAddTaskClick(title, desc) {
    const newTask = {
      id: v4(),
      title: title,
      description: desc,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  }

  function OnTaskClick(taskID) {
    const newTasks = tasks.map((task) =>
      taskID === task.id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  }

  function OnDeleteTask(taskID) {
    const newTasks = tasks.filter((task) => taskID != task.id);
    setTasks(newTasks);
  }

  return (
    <div className="h-screen w-screen bg-zinc-800 flex justify-center p-6">
      <div className="w-[500px] space-y-5">
        <Title>Gerenciador de tarefas</Title>
        <AddTask OnAddTaskClick={OnAddTaskClick} />
        <Tasks
          tasks={tasks}
          OnTaskClick={OnTaskClick}
          OnDeleteTask={OnDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
