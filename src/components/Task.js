import { BiTrash, BiPencil } from "react-icons/bi";
import { useTaskListAction } from "../context/TaskListProvider";

const Task = ({ task, onEdit }) => {
  const dispatch = useTaskListAction();

  const removeOneTask = () => {
    dispatch({ type: "REMOVE_ONE_TASK", payload: task.id });
  };

  return (
    <li className="list-item " key={task.id}>
      <span>{task.text}</span>
      <div>
        <button onClick={removeOneTask} className="btn-delete task-btn ">
          <BiTrash />
        </button>
        <button onClick={onEdit} className="btn-edit task-btn ">
          <BiPencil />
        </button>
      </div>
    </li>
  );
};

export default Task;
