import { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  // const [msg, setMsg] = useState("Mensagem inicial")
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Tarefa 1",
    description: "aaaaaaaaaaaaaaaaaaaaaaaa",
    isCompleted: false
  }, {
    id: 2,
    title: "Tarefa 2",
    description: "aaaaaaaaaaaaaaaaaaaaaaaa",
    isCompleted: true
  }, {
    id: 3,
    title: "Tarefa 3",
    description: "aaaaaaaaaaaaaaaaaaaaaaaa",
    isCompleted: true
  }
]);


// recebe qual tarefa foi clicada
function onTaskClick(taskId) {
  const newTasks = tasks.map(task => {
    //verificase o id da tarefa atual é o id da tarefa clicada
    if (task.id === taskId) { //achou
      //retorna nova tarefa com dados e isCompleted invertido
      return {
        ...task, isCompleted: !task.isCompleted
      }
    }
    //else - retorna tarefa atual 
    return task;
  });
  //atualiza estado para a nova lista de tarefas
  setTasks(newTasks);
}


//mantem na lista todas as tarefas diferentes da tarefa clicada
function onDeleteTaskClick(taskId) {
  const newTasks = tasks.filter(task => task.id != taskId);
  //atualiza estado para a nova lista de tarefas
  setTasks(newTasks);
}


//adiciona nova tarefa na lista
function onAddTaskSubmit (title, description) {
  const newTask = {
    id: tasks.length + 1,
    title, //mesmo nome do parametro
    description,
    isCompleted: false,
  };
  setTasks([...tasks, newTask]); //adiciona nova tarefa no final da lista - atualiza estado
}


// renderiza tudo (componentes filhos)
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="width[500px] space-y-4"> {/* espaço vertical entre elementos */}
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas</h1>
        {/* renderizar */}
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks = {tasks} onTaskClick = {onTaskClick} onDeleteTaskClick={onDeleteTaskClick} onAddTaskSubmit={onAddTaskSubmit}/> {/* componente filho */}
        {/* passar os valores - passa a função onTaskClick como prop*/}
      </div>
    </div>
  );
}


export default App;
