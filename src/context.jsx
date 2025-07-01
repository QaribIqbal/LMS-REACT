// src/context.jsx
import { useState, useRef, useEffect } from "react";
import { TaskContext } from "./context/TaskContext";

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      const defaultTasks = [
        {
          id: 1,
          title: "Complete frontend UI",
          desc: "Finish designing the user interface for the dashboard screen.",
          dueDate: "2025-07-01",
          status: "pending",
        },
        {
          id: 2,
          title: "Write API integration logic",
          desc: "Integrate backend APIs with the form submission module.",
          dueDate: "2025-07-03",
          status: "pending",
        },
        {
          id: 3,
          title: "Team standup meeting",
          desc: "Daily 15-minute sync with the development team via Zoom.",
          dueDate: "2025-06-29",
          status: "pending",
        },
        {
          id: 4,
          title: "Fix login bug",
          desc: "Resolve the issue where users are not redirected after login.",
          dueDate: "2025-06-30",
          status: "pending",
        },
        {
          id: 5,
          title: "Prepare deployment checklist",
          desc: "Document all steps and items needed before production deployment.",
          dueDate: "2025-07-05",
          status: "pending",
        },
      ];
      setTasks(defaultTasks);
      initialized.current = true;
    }
  }, []);
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
