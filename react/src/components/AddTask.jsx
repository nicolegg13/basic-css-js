import { useState } from "react";

function AddTask({onAddTaskSubmit}) { //props

    //acessar valor dos inputs
    const [title, setTitle] = useState(""); //inicia vazio (no input)
    const [description, setDescription] = useState("");
    // console.log({ title, description });

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <h1>Add task</h1>
      <form>
        <input type="text" placeholder="Task title" 
        className="p-2 rounded-md w-full mb-2 border border-slate-300 outline-slate-400 px-4 py-2" 
        value={title} onChange={(event) => setTitle(event.target.value)} //atualiza state conform muda input
        />
        
        <textarea placeholder="Task description" 
        className="p-2 rounded-md w-full mb-2 border border-slate-300 outline-slate-400 px-4 py-2 
        value={description}" onChange={(event) => setTitle(event.target.value)}
        />
        
        <button className="bg-slate-500 text-white px-4 py-2 rounded-md w-full"
        onClick={() => {
            onAddTaskSubmit(title, description)
            setTitle("");
            setDescription(""); //limpa
        }} //chama função que foi passada como prop, states tem os valores dos inputs
        >adicionar</button>
      </form>
    </div>
  );
}

export default AddTask;
