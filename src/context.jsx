// src/context.jsx
import { useState } from "react";

import { TaskContext } from "./TaskContext";

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks((prev) => [...prev, task]);
  const removeTask = (index) =>
    setTasks((prev) => prev.filter((_, i) => i !== index));
  const updateStatus = (index) => {
    console.log(index);
    setTasks(
      tasks.map((prev) => {
        if (prev.id == index) {
          const updatedStatus = prev.status === "done" ? "pending" : "done";
          const updatedTask = { ...prev, status: updatedStatus };
          console.log('Task updated ', updatedTask);
          return updatedTask;
        }
        return prev;
      })
    );
  };
  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, setTasks, updateStatus }}
    >
      {children}
    </TaskContext.Provider>
  );
}
