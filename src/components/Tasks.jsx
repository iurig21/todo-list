import { CheckIcon, ChevronRightIcon,Trash,Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import SearchBar  from "./SearchBar";
import {useEffect, useState} from "react";

function Tasks({tasks,OnTaskClick,OnDeleteTask,OnEditTaskClick}) {


const [SearchedTasks,setSearchedTasks] = useState(tasks);


const navigate = useNavigate();

function OnSeeDetailsClick(task){
    const query = new URLSearchParams();
    query.set("title",task.title);
    query.set("description",task.description);
    navigate(`/task?${query.toString()}`);
}

function OnSerchBarChange (value){
  setSearchedTasks(tasks.filter((task) => task.title.includes(value)));
}

useEffect(() => setSearchedTasks(tasks),[tasks]);
  
  return (
    <ul className="list-none space-y-3 bg-zinc-700 p-4 rounded-md shadow-md ">
      <SearchBar OnSerchBarChange={OnSerchBarChange}/>
      {SearchedTasks.map((task,idx) => (
        <li key={idx} className="flex gap-2">
          <button className={` cursor-pointer text-white bg-zinc-800 rounded-md p-2 w-full flex gap-2 text-start ${task.completed && 'line-through'}`} onClick={() => OnTaskClick(task.id)}> {task.completed && <CheckIcon/>} {task.title} </button>
          <Button onClick={() => OnSeeDetailsClick(task)}> <ChevronRightIcon/> </Button>
          <Button onClick={() => OnEditTaskClick(task)}> <Pencil/> </Button>
          <Button onClick={() => OnDeleteTask(task.id)}> <Trash/> </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
