import React from "react";
import { useState } from "react";
import myFunctionHookList from "./components/MyPersonalHook";
import Header from "./components/Header";
import {
  ChakraProvider,
  Button,
  Container,
  Input,
  Card,
  CardBody,
  CardHeader,
  Center,
  Checkbox,
  SimpleGrid,
  Heading,
  CardFooter,
  Flex,
  Grid,
  Box,
} from "@chakra-ui/react";

function App() {
  // importamos las funciones de MyPersonalHoo-k
  const { tasks, createTask, deleteTask, updateTask } = myFunctionHookList();
  // manejamos las funciones de los estados de cada tarea
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editTask, setEditTask] = useState(null);
  const [editedText, setEditedText] = useState("");

  // crea la tarea y resetea el estado
  const handleCreateTask = (e) => {
    e.preventDefault();
    if (newTask.trim().length < 3) {
      alert("El nombre de la tarea debe contener mas de 3 caracteres");
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
    };
  

  // edita el titulo y la descripción de la tarea y resetea el estado
  const handleEditTask = (taskId) => {
    setEditTask(taskId);
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditedText(taskToEdit);
    setEditedDescription(taskToEdit.description);
  };

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
    }
  };

  // elimina las tareas
  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  // coloca las tareas en completada
  const handleToggleTask = (taskId) => {
    updateTask(taskId, {
      completed: !tasks.find((task) => task.id === taskId).completed,
    });
  };

  // retornamos las funciones y estilos agregados
  return (
    <ChakraProvider>
      <>
        
          <Container>
            <Center>
              <Header />
            </Center>

            <div>
                <form onSubmit={handleCreateTask}>
              <Card>
                <Input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Agrear Tarea"
                  isRequired
                  minLength={3}
                />
                <Input
                  type="text"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Descripción"
                />
                <Button colorScheme="teal" type="submit" onClick={handleCreateTask}>
                  Agregar
                </Button>
              </Card>
                </form>
            </div>
          </Container>
          
          <div>
              
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>
                  {editTask === task.id ? (
                    <>
                      <Card>
                        <CardBody>
                          <Input
                            type="text"
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                          />
                          <Input
                            type="text"
                            value={editedDescription}
                            onChange={(e) =>
                              setEditedDescription(e.target.value)
                            }
                          />
                          <CardFooter>
                            <Button
                              colorScheme="teal"
                              variant="outline"
                              onClick={handleSaveEdit}
                            >
                              Guardar
                            </Button>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </>
                  ) : 
                  (
                    <Card align="center">
                      <CardHeader>
                        <Heading>
                          <Checkbox
                            colorScheme="green" /* style={{ textDecoration: task.completed ? 'line-through' : 'red' }} */
                          >
                            {task.text}
                          </Checkbox>
                        </Heading>
                      </CardHeader>
                      <CardBody>
                        <div>{task.description}</div>
                      </CardBody>
                      <CardFooter>
                        <Button
                          colorScheme="teal"
                          variant="solid"
                          onClick={() => handleToggleTask(task.id)}
                        >
                          Completada
                        </Button>
                        <Button
                          colorScheme="teal"
                          variant="solid"
                          onClick={() => handleEditTask(task.id)}
                        >
                          Editar
                        </Button>
                        <Button
                          colorScheme="teal"
                          variant="solid"
                          onClick={() => handleDeleteTask(task.id)}
                        >
                          Eliminar
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                </li>
              ))}
            </ul>
              
          </div>
              
        
      </>
    </ChakraProvider>
  );
}

export default App;
