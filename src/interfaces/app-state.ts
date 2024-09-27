import { Task } from "./task";

export interface AppState {
    taskList: { tasks: Task[] }
}