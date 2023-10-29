import React from 'react';
import { useState } from 'react';
import taskList from './components/TaskList';
import {
  ChakraProvider,
  Button,
  Container,
  Input,
  Card,
  CardBody,
  background,
} from '@chakra-ui/react';
import { color } from 'framer-motion';


function App() {
  const { tasks, createTask, deleteTask, updateTask } = taskList();
  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editTask, setEditTask] = useState(null);
  const [editedText, setEditedText] = useState('');
  
  const handleCreateTask = () => {
    if (newTask.trim() !== '') {
      createTask({ id: Date.now(), text: newTask, description: newDescription, completed: false });
      setNewTask('');
      setNewDescription('');
    }
  };

  const handleEditTask = (taskId) => {
    setEditTask(taskId);
    const taskToEdit = tasks.find(task => task.id === taskId);
    setEditedText(taskToEdit);
    setEditedDescription(taskToEdit.description);
  };

  const handleSaveEdit = () => {
    if (editedText.trim() !== '') {
      updateTask(editTask, { text: editedText, description: editedDescription });
      setEditTask(null);
      setEditedText('');
      setEditedDescription('');
    }
  };
  
  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };
  
  const handleToggleTask = (taskId) => {
    updateTask(taskId, { completed: !tasks.find(task => task.id === taskId).completed });
  };


  return (
    <ChakraProvider>
      <Container>
      <div>
      <h1>Lista de tareas</h1>
      <div>
        <Input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Agrear Tarea'
        />
        <Input
        type='text'
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        placeholder='Descripción'
        />
        <Button colorScheme='teal' onClick={handleCreateTask}>Agregar</Button>
      </div>
      <div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {editTask === task.id ? (
              <>
              <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              />
              <input
              type='text'
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              />
              <Button colorScheme='teal' variant='outline' onClick={handleSaveEdit}>Guardar</Button>
               </>
            ) : (
              <>
              <Card >
            <CardBody>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'red' }}>{task.text}</span>
            </CardBody>
              </Card >
            <Card bg={'gray.300'}>
              <CardBody >
            <div>{task.description}</div>
            </CardBody>
            </Card>
            <Button colorScheme='teal' variant='solid' onClick={() => handleToggleTask(task.id)}>Completada</Button>
            <Button colorScheme='teal' variant='solid' onClick={() => handleEditTask(task.id)}>Editar</Button>
            <Button colorScheme='teal' variant='solid' onClick={() => handleDeleteTask(task.id)}>Eliminar</Button>
            </>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
  </Container>
    </ChakraProvider>
  );
}

export default App;
