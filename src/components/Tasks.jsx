import { CheckIcon, ChevronRightIcon,Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
function Tasks({tasks,OnTaskClick,OnDeleteTask}) {

  const navigate = useNavigate();

function OnSeeDetailsClick(task){
    const query = new URLSearchParams();
    query.set("title",task.title);
    query.set("description",task.description);
    navigate(`/task?${query.toString()}`);
}

  return (
    <ul className="list-none space-y-3 bg-zinc-700 p-4 rounded-md shadow-md">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button className={` cursor-pointer text-white bg-zinc-800 rounded-md p-2 w-full flex gap-2 text-start ${task.completed && 'line-through'}`} onClick={() => OnTaskClick(task.id)}> {task.completed && <CheckIcon/>} {task.title} </button>
          <Button onClick={() => OnSeeDetailsClick(task)}> <ChevronRightIcon/> </Button>
          <Button onClick={() => OnDeleteTask(task.id)}> <Trash/> </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
