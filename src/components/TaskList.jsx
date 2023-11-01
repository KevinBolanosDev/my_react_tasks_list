import React from "react";
import Header from "./Header";
import {
    ChakraProvider,
    Button,
    Input,
    Card,
    CardBody,
    CardHeader,
    Heading,
    CardFooter,
    Container,
    Flex,
    Stack,
  } from "@chakra-ui/react";

const TasksList = ({newTask, setNewTask, newDescription, setNewDescription, editedDescription, setEditedDescription, editTask, editedText, setEditedText, handleCreateTask, tasks, handleDeleteTask, handleEditTask, handleSaveEdit, handleToggleTask}) => {

    return (
        <ChakraProvider>
      <>
      <Header />
      <div /* style={{background: 'linear-gradient(to right, #0F2027, #203A43, #2C5364)', color: 'white'}} */>
              <Container>
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
            </Container>
            </div>
          
          <div>
          <Flex wrap='wrap' spacing='8px'>
              {tasks.map((task, index) => (
                <div key={task.id}>
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
                              colorScheme="blue"
                              variant="solid"
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
                        <Heading size='md'>
                            # {index + 1} {task.text}
                        </Heading>
                      </CardHeader>
                      <CardBody>
                        <div>{task.description}</div>
                      </CardBody>
                      <CardFooter>
                        <Stack direction='row' spacing={4}>  
                        <Button
                          colorScheme={task.completed ? "green" : "teal"}
                          variant="solid"
                          onClick={() => handleToggleTask(task.id)}
                          >
                          Cumplida
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
                          variant="outline"
                          onClick={() => handleDeleteTask(task.id)}
                          >
                          Eliminar
                        </Button>
                          </Stack>
                      </CardFooter>
                    </Card>
                  )}
                </div>
              ))}
            </Flex>
          </div>
      </>
    </ChakraProvider>
    )
}

export default TasksList;