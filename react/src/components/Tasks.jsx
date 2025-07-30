import { ChevronRightIcon, DeleteIcon } from "lucide-react";

// function Tasks(props) {
function Tasks({tasks, onTaskClick, onDeleteTaskClick}) { //desestruturação de props
  // return <h3>{tasks[0].title}</h3>; //renderiza no html
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
            {/* task.id é o id da tarefa atual */}
            {/* props.onTaskClick é a função que foi passada como prop */}
            {/* task.id é passado como argumento para a função onTaskClick - atualiza estado*/}
          <button onClick={() => onTaskClick(task.id)}
          className={`text-left bg-slate-400 text-white p-2 rounded-md w-full
            ${task.isCompleted && 'line-through'}`}> {/* se task.isCompleted == true, adiciona a classe line-through */}
            {task.title}
            {/* {task.isCompleted ? " ✅" : " ❌"} */}
            </button>
          <button className="bg-slate-400 text-white p-2 rounded-md">
            <ChevronRightIcon />
          </button>

          {/* quando clica nesse botão, chama a função onDeleteTaskClick passando o id da tarefa atual 
          função tira a tarefa do state*/}
          <button  onClick={() => onDeleteTaskClick(task.id)} 
          className="bg-slate-400 text-white p-2 rounded-md">
            <DeleteIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
