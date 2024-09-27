import { Task } from "@/interfaces/task";

export const TASK_ACTION_TYPES = {
    ADD_TASK: "add_task",
    EDIT_TASK: "edit_task",
    REMOVE_TASK: "remove_task",
} as const;

export type TaskActionType = typeof TASK_ACTION_TYPES[keyof typeof TASK_ACTION_TYPES];

export type TaskAction = {
    type: typeof TASK_ACTION_TYPES.ADD_TASK,
    task: Task
} | {
    type: typeof TASK_ACTION_TYPES.REMOVE_TASK,
    taskId: number
} | {
    type: typeof TASK_ACTION_TYPES.EDIT_TASK,
    taskId: number,
    newTask: Task
};