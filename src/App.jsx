import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import myFunctionHookList from "./components/MyPersonalHook";
import Home from "./components/Home";
import Menu from "./components/Menu";
import TasksList from "./components/TaskList";
import { Alert, AlertIcon } from "@chakra-ui/react";
import AboutUs from "./components/AboutUs";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // importamos las funciones de MyPersonalHook
  const { tasks, createTask, deleteTask, updateTask } = myFunctionHookList();
  // manejamos las funciones de los estados de cada tarea
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editTask, setEditTask] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [alert, setAlert] = useState({ show: false, message: ""});

    const timeAlert = (status, message) => {
      setAlert({ show: true, status: status, message: message });
      setTimeout(() => {
        setAlert({ show: false, status: "", message: "" });
      }, 4000);
    }

    // crea la tarea y resetea el estado
    const handleCreateTask = (e) => {
      e.preventDefault();
      if (newTask.trim().length < 4) {
        timeAlert("error", "El texto de la tarea debe tener al menos 4 caractares.");
        return;
      }
        
        createTask({
          id: Date.now(),
          text: newTask,
          description: newDescription,
          completed: false,
        });
        setNewTask("");
        setNewDescription("");
        timeAlert("success", "Tu tarea fue creada exitosamente");
      };
    
  
    // edita el titulo y la descripción de la tarea y resetea el estado
    const handleEditTask = (taskId) => {
      setEditTask(taskId);
      const taskToEdit = tasks.find((task) => task.id === taskId);
      setEditedText(taskToEdit.text);
      setEditedDescription(taskToEdit.description);
      // timeAlert("success","Tu tarea se edito exitosamente.");
    }; // Tengo que revisar el [Objetc, object] que se me est generando
  
    // guarda las tareas y descripciones editadas
    const handleSaveEdit = () => {
      if (editedText.trim() !== "") {
        updateTask(editTask, {
          text: editedText,
          description: editedDescription,
        });
        setEditTask(null);
        setEditedText("");
        setEditedDescription("");
        timeAlert("success", "Tu tarea se actualizo exitosamente");
      }
    };
  
    // elimina las tareas
    const handleDeleteTask = (taskId) => {
      deleteTask(taskId);
      timeAlert("error", "Tu tarea se ha eliminado.");
    };
  
    // coloca las tareas en completada
    const handleToggleTask = (taskId) => {
      updateTask(taskId, {
        completed: !tasks.find((task) => task.id === taskId).completed,
      });
      timeAlert("success","Tarea cumplida.");
    };

  // retornamos las funciones y estilos agregados
  return (
    <ChakraProvider>
      {alert.show && (
        <Alert status={alert.status} flexDirection="column" width="300px">
    <AlertIcon />
    {alert.message}
  </Alert>
)}
    <Router>
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TasksList
            newTask={newTask}
            setNewTask={setNewTask}
            newDescription={newDescription}
            setNewDescription={setNewDescription}
            editedDescription={editedDescription}
            setEditedDescription={setEditedDescription}
            editTask={editTask}
            setEditTask={setEditTask}
            editedText={editedText}
            setEditedText={setEditedText}
            handleCreateTask={handleCreateTask}
            handleDeleteTask={handleDeleteTask}
            handleEditTask={handleEditTask}
            handleSaveEdit={handleSaveEdit}
            handleToggleTask={handleToggleTask}
            tasks={tasks}
            createTask={createTask}
            deleteTask={deleteTask}
            updateTask={updateTask}
            alert={setAlert}
          /> 
          } />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
    </Router>
      </ChakraProvider>
  )
}
export default App;
