import TaskForm from "@/components/tasks/task-form";
import { useTasks } from "@/hooks/use-tasks";
import { Task } from "@/interfaces/task";
import { Redirect, useLocalSearchParams } from "expo-router";

export default function TaskEdit() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { tasks, editTask } = useTasks();

  console.log("Editting task...", id);

  if (!id) {
    return <Redirect href="/tasks" />;
  }
  const parsedId = parseInt(id, 10);
  if (isNaN(parsedId)) {
    return <Redirect href="/tasks" />;
  }

  const task = tasks.find((task) => task.id === parsedId);
  const handleSubmit = (fields: Task) => {
    editTask(parsedId, fields);
  };
  return (
    <TaskForm
      titleText="Edita tu tarea"
      subtitleText="Modifica los campos que desees"
      onSubmit={handleSubmit}
      getValues={() => task}
      buttonText="Guardar cambios"
    />
  );
}
