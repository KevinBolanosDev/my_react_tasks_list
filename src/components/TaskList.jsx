import React from "react";
import Header from "./Header";
import {
    Button,
    Input,
    Card,
    CardBody,
    Heading,
    CardFooter,
    Container,
    Stack,
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
  } from "@chakra-ui/react";

const TasksList = ({newTask, setNewTask, newDescription, setNewDescription, editedDescription, setEditedDescription, editTask, editedText, setEditedText, handleCreateTask, tasks, handleDeleteTask, handleEditTask, handleSaveEdit, handleToggleTask}) => {

    return (
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", background: "linear-gradient(to right, #1f4037, #99f2c8)", height: "100%", padding: "20px"}}>
      <Header />
        <div>
              <Container>
                <form onSubmit={handleCreateTask}>
              <Card gap={1} width='400px'>
                <Input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Agrear Tarea"
                  isRequired
                  minLength={3}
                  variant={3}
                  focusBorderColor="#008170"
                  bgColor="white"
                  color="black"
                />
                <Input
                  type="text"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Descripción"
                  variant={3}
                  focusBorderColor="#00A99D"
                  bgColor="white"
                  color="black"
                />
                <Button style={{background: "#232D3F"}} color="white" type="submit" onClick={handleCreateTask}>
                  Agregar
                </Button>
              </Card>
                </form>
            </Container >
            </div>
            <br/>
          <div>
            <Container>
          <Accordion allowToggle flexWrap='wrap' gap={2}>
              {tasks.map((task, index) => (
                <AccordionItem key={task.id}>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="center">
                          <Heading size='md'>
                            # {index + 1} {task.text}
                          </Heading>
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      {editTask === task.id ? (
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
                              style={{background: "#232D3F"}}
                              variant="solid"
                              onClick={handleSaveEdit}
                              color="white"
                              >
                              Guardar
                            </Button>
                            </CardFooter>
                        </CardBody>
                      </Card>
                  ) : (
                    <Card align="center" bg="teal.500" color="white" maxW="sm" overflow="hidden">
                      <CardBody>
                        <Box>
                        {task.description}
                        </Box>
                      </CardBody>
                      <CardFooter>
                        <Stack direction='row' spacing={4}>  
                        <Button
                          colorScheme={task.completed ? "green" : "blue"}
                          variant="solid"
                          onClick={() => handleToggleTask(task.id)}
                          >
                          Cumplida
                        </Button>
                        <Button
                          colorScheme="teal"
                          variant="outline"
                          color="white"
                          onClick={() => handleEditTask(task.id)}
                          >
                          Editar
                        </Button>
                        <Button
                          colorScheme="teal"
                          variant="outline"
                          onClick={() => handleDeleteTask(task.id)}
                          color="wite"
                          >
                          Eliminar
                        </Button>
                          </Stack>
                      </CardFooter>
                    </Card>
                    )}
                    </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
            </Container>
          </div>
      </div>
    )
}

export default TasksList;