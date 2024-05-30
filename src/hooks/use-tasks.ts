import { TaskContext } from "@/components/tasks/provider";
import { useContext } from "react";

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTasks must be used within a TaskProvider");
    }
    return context;
}