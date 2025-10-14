// State, map e criação novas tarefas mockadas
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AppV4() {
  // Sempre que queremos que algo na tela seja variável, utilizamos o state.
  const [tasks, setTasks] = useState([
    {
      id: "8f7a9356-18b0-4506-8bbf-f092b736f8c5",
      title: "JavaScript",
      description: "Descrição",
      isCompleted: false,
    },
    {
      id: "1f4f762a-ed6a-4e8c-a576-2e197a83af00",
      title: "React",
      description: "Descrição",
      isCompleted: false,
    },
    {
      id: "7019ac75-aee2-4ec9-89d3-f5bde3e0cd53",
      title: "Tailwind",
      description: "Descrição",
      isCompleted: false,
    },
  ]);

  function addTask() {
    const newTask = {
      id: uuidv4(),
      title: "Titulo",
      description: "Descrição",
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    console.log(tasks);
  }

  return (
    <div className="min-h-screen w-screen bg-[#05080f] space-y-11 flex flex-col items-center">
      <div className=" pt-8">
        <h1>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300 text-4xl font-bold">
            TaskFlow
          </span>
        </h1>
      </div>

      <p className="text-[#94B3D1] text-lg leading-relaxed">
        Organize suas tarefas com estilo futurístico. Uma experiência única de
        produtividade que vai fazer você querer criar mais tarefas.
      </p>

      {/* CARD */}
      <div className="bg-[#0a0e17] rounded-lg space-y-6 p-8 w-2/3">
        <h2>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300 text-2xl font-bold">
            Criar Nova Tarefa
          </span>
        </h2>

        <div className="space-y-4">
          <p className="text-sm text-slate-200 font-medium">Nome da Tarefa</p>
          <input
            type="text"
            placeholder="Digite o nome da tarefa"
            className="text-[#94B3D1] placeholder-[#94B3D1] leading-relaxed bg-[#0F1421] focus:bg-transparent rounded-md border border-transparent focus:border-blue-500 focus:outline-none focus:shadow-[0_0_10px_#3B82F6] px-4 py-3 w-full"
          />
        </div>

        <div className="space-y-4">
          <p className="text-sm text-slate-200 font-medium">Descrição</p>
          <input
            type="text"
            placeholder="Digite a descrição da tarefa"
            className="text-[#94B3D1] placeholder-[#94B3D1] leading-relaxed bg-[#0F1421] focus:bg-transparent rounded-md border border-transparent focus:border-blue-500 focus:outline-none focus:shadow-[0_0_10px_#3B82F6] px-4 py-3 w-full"
          />
        </div>

        <button
          onClick={() => addTask()}
          className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-black py-3 rounded-lg font-medium flex gap-2 w-full justify-center hover:from-[#2563EB] hover:to-[#1E3A8A] transition-all"
        >
          <span>+</span>
          <span>Criar Tarefa</span>
        </button>
      </div>

      {/* TASKLIST */}
      <div>
        {/*
        <ul className="text-slate-200">
          {tasks.forEach((task) => (
            <li>{task.title}</li>
          ))}
        </ul>
        */}

        <ul className="text-slate-200">
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
          {/* {console.log(tasks)} */}
        </ul>
      </div>
    </div>
  );
}

export default AppV4;
