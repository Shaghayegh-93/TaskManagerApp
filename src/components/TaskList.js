import { useTaskList } from "../context/TaskListProvider";
import Task from "./Task";

const TaskList = ({ setEdit }) => {
  const { taskList } = useTaskList();

  const renderTask = () => {
    if (taskList.length === 0) return <div className="no-tasks">No tasks</div>;
    return (
      <div className="task-list">
        {taskList.map((task) => {
          return (
            <Task key={task.id} task={task} onEdit={() => setEdit(task)} />
          );
        })}
      </div>
    );
  };
  return <div>{renderTask()}</div>;
};

export default TaskList;
