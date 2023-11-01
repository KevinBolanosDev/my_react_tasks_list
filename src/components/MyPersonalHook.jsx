import { useState, useEffect } from "react";

const myFunctionHookList = () => {
  // función de array para guardar las tareas
  const tasksStorage = localStorage.getItem("tasks");
  const parsedTasks = tasksStorage ? JSON.parse(tasksStorage): [];
  const [tasks, setTasks] = useState(parsedTasks);

  // almacena los estados de las tareas en el localstorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // función para crear las tareas
  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // función para eliminar las tareas
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // función para actualizar las tareas
  const updateTask = (taskId, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      )
    );
  };

  // retornamos las funciones al App.jsx
  return { tasks, createTask, deleteTask, updateTask };
};

export default myFunctionHookList;
