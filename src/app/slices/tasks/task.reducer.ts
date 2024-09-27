import { Serialized } from "@/interfaces/serialized";
import { Task } from "@/interfaces/task";
import { TASK_ACTION_TYPES, TaskAction } from "./types";

export type TaskState = {
    tasks: Task[]
}

const DEFAULT_TASKS: Task[] = require("./tasks.json").map(
    (json: Serialized<Task>) => {
        return {
            ...json,
            date: new Date(json.date),
        };
    }
);

const INITIAL_STATE = {
    tasks: DEFAULT_TASKS
}

export default function taskReducer(state: TaskState = INITIAL_STATE, action: TaskAction) {
    switch (action.type) {
        case TASK_ACTION_TYPES.ADD_TASK:
            return {
                tasks: [...state.tasks, { ...action.task, id: state.tasks.length + 1 }]
            }
        case TASK_ACTION_TYPES.EDIT_TASK:
            return {
                tasks: state.tasks.map((task) =>
                    task.id === action.taskId ? { ...action.newTask, } : task
                )
            };
        case TASK_ACTION_TYPES.REMOVE_TASK:
            return {
                tasks: state.tasks.filter((task) => task.id !== action.taskId)
            }
        default:
            return state;
    };
}