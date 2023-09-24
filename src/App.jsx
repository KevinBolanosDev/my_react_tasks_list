import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Task } from "./components/Task";
import { TaskList } from "./components/TaskList";
import { Center, Grid, GridItem } from "@chakra-ui/react";

function App() {
  const [taskList, setTaskList] = useState([]);

  function createNewTask(taskName) {
    if (!taskList.find((task) => task.name === taskName)) {
      setTaskList([...taskList, { name: taskName, done: false }]);
    }
  }

  const changeState = (task) => {
    setTaskList(
      taskList.map((t) => (t.name == task.name ? {...t, done: !t.done} : t)) 
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskList(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  return (
  <Center>
    <Grid templateColumns='repeat(2, 1fr)'>
      <GridItem>
        <main className="container-main">
          <div className="container">
            <Header />
            <Task createNewTask={createNewTask} />
            <TaskList tasks={taskList} changeState={changeState} />
          </div>
        </main>
      </GridItem>
      </Grid>
  </Center>
  );
}

export default App;
