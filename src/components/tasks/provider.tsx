import { TASK_ACTION_TYPES } from "@/app/slices/tasks/types";
import { AppState } from "@/interfaces/app-state";
import { Task } from "@/interfaces/task";
import { ReactNode, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";

type TaskContextValue = {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (taskId: number) => void;
  editTask: (taskId: number, newTask: Task) => void;
};

export const TaskContext = createContext<TaskContextValue | null>(null);

export default function TaskContextProvider(props: { children: ReactNode }) {
  const dispatch = useDispatch();
  const tasks = useSelector<AppState, Task[]>((state) => state.taskList.tasks);

  const addTask = (task: Task) => {
    dispatch({ type: TASK_ACTION_TYPES.ADD_TASK, task });
  };

  const removeTask = (taskId: number) => {
    dispatch({ type: TASK_ACTION_TYPES.REMOVE_TASK, taskId });
  };

  const editTask = (taskId: number, newTask: Task) => {
    dispatch({ type: TASK_ACTION_TYPES.EDIT_TASK, taskId, newTask });
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
