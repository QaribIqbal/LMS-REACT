// src/context.jsx
import { useState } from "react";
import { TaskContext } from "./TaskContext";

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks((prev) => [...prev, task]);
  const removeTask = (index) =>{
    console.log("Removing task at index:", index), 
    setTasks((prev) => prev.filter((t) => t.id !== index));
  }

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
  const taskCounter = ()=>{
    const counter=tasks.length;
    return counter;
  }
  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, setTasks, updateStatus, taskCounter }}
    >
      {children}
    </TaskContext.Provider>
  );
}
