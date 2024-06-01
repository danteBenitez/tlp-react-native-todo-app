import { baseStyles } from "@/components/base-styles";
import InputController from "@/components/input-controller";
import TaskForm from "@/components/tasks/task-form";
import { useTasks } from "@/hooks/use-tasks";
import { Task } from "@/interfaces/task";

export default function AddTodo() {
  const { addTask } = useTasks();
  const handleSubmit = (fields: Task) => {
    addTask(fields);
  };
  return (
    <TaskForm
      titleText="Agrega una nueva tarea" 
      subtitleText="Crea tareas para nunca olvidar nada"
      onSubmit={handleSubmit} 
      getValues={() => undefined}
      buttonText="Agregar tarea"
    /> 
  );
}
