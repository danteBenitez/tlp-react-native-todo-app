import { Task } from "@/interfaces/task";
import { ReactNode, createContext, useState } from "react";

type TaskContextValue = {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (taskId: number) => void;
  editTask: (taskId: number, newTask: Task) => void;
};

const DEFAULT_TASKS: Task[] = [
  {
    id: 1,
    title: "Comprar pan",
    description: "Panadería la flor de la vida",
    author: "Yo",
    date: new Date(),
  },
  {
    id: 2,
    title: "Llamar a mamá",
    description: "Recordarle que le quiero",
    author: "Yo",
    date: new Date(),
  },
  {
    id: 3,
    title: "Reunión con el jefe",
    description: "Presentar informe de ventas",
    author: "Yo",
    date: new Date(),
  },
  {
    id: 4,
    title: "Comprar pan",
    description: "Panadería la flor de la vida",
    author: "Yo",
    date: new Date(),
  },
  {
    id: 5,
    title: "Llamar a mamá",
    description: "Recordarle que le quiero",
    author: "Yo",
    date: new Date(),
  },
  {
    id: 6,
    title: "Reunión con el jefe",
    description: "Presentar informe de ventas",
    author: "Yo",
    date: new Date(),
  },
];

export const TaskContext = createContext<TaskContextValue | null>(null);

export default function TaskContextProvider(props: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId: number, newTask: Task) => {
    setTasks(tasks.map((task) => (task.id === taskId ? newTask : task)));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        editTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
