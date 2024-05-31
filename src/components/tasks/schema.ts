import { Task } from "@/interfaces/task";
import { z } from "zod";

export const taskSchema = z.object({
    title: z.string().min(1, {
        message: "El título es requerido",
    }),
    description: z.string().min(1, {
        message: "La descripción es requerida",
    }),
    author: z.string().min(1, {
        message: "El autor es requerido",
    }),
    date: z.date({
        message: "La fecha es requerida",
    }),
});

taskSchema._output satisfies Omit<Task, "id">;