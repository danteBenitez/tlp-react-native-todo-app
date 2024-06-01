import { Task } from "@/interfaces/task";
import { Serialized } from "@/interfaces/serialized";
import { ReactNode, createContext, useState } from "react";

type TaskContextValue = {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (taskId: number) => void;
  editTask: (taskId: number, newTask: Task) => void;
};

const DEFAULT_TASKS: Task[] = require('./tasks.json').map((json: Serialized<Task>) => {
  return {
    ...json,
    date: new Date(json.date),
  }
});

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
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...newTask, id: taskId } : task
      )
    );
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
