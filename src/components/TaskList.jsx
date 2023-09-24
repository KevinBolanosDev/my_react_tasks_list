import { TaskRow } from "./TaskRow";
import {  TableContainer, Table, Thead, Tr, Th, Tbody} from "@chakra-ui/react"

export const TaskList = ({ tasks, changeState }) => {
  return (
    <TableContainer>
    <Table>
      <Thead>
        <Tr>
          <Th>Tasks</Th>
        </Tr>
      </Thead>
      <Tbody>
        {tasks.map((task) => (
          <TaskRow task={task} key={task.name} changeState={changeState}
          />
        ))}
      </Tbody>
    </Table>
    </TableContainer>
  );
};
