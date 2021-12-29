import { useTaskListAction } from "../context/TaskListProvider";

const TaskForm = ({ changeHandler, taskText, edit, submitHandler }) => {
  const dispatch = useTaskListAction();

  const removeAllTask = () => {
    dispatch({ type: "REMOVE_ALL_TASK" });
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <input
        className="task-input"
        type="text"
        onChange={changeHandler}
        value={taskText}
        placeholder="Add Task"
        autoFocus
      />
      <div className="buttons">
        <button className="btn add-task-btn " type="submit">
          {edit.id ? "Edit Task" : "Add Task"}
        </button>
        <button onClick={removeAllTask} className="btn clear-btn ">
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
