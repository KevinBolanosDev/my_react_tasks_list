import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";

export const Task = ({ createNewTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Add your new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button>Add task</Button>
    </form>
  );
};
