export const TaskRow = ({ task, changeState}) => {
  return (
    <tr style={{ textDecoration: task.done ? "line-through" : "none", color: task.done ? "red" : "black"}}>
      <td>
        {task.name}
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => changeState(task)}
        />
      </td>
    </tr>
  );
};
