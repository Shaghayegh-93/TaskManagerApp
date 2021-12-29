import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useState, useEffect } from "react";
import { useTaskListAction } from "../context/TaskListProvider";

const TaskManagerApp = () => {
  const [edit, setEdit] = useState({ id: null, text: "" });

  const [taskText, setTaskText] = useState("");

  const dispatch = useTaskListAction();
  useEffect(() => {
    edit.id ? setTaskText(edit.text) : setTaskText("");
  }, [edit]);

  const changeHandler = (e) => {
    e.preventDefault();
    setTaskText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (edit.id) {
      dispatch({
        type: "EDIT_TASK",
        payload: {
          id: edit.id,
          text: taskText,
        },
      });
      setEdit({ id: null, text: "" });
    }
    if (!edit.id) {
      const newTaskText = taskText.trim();
      const isNewTaskTextPresent = newTaskText.length > 0;
      if (isNewTaskTextPresent) {
        dispatch({ type: "ADD_TASK", payload: newTaskText });
        setTaskText("");
      }
    }
  };

  return (
    <div className="app-wrapper">
      <div className="main">
        <header className="header">
          <h1>Task Manager</h1>
        </header>
        <TaskForm
          changeHandler={changeHandler}
          taskText={taskText}
          submitHandler={submitHandler}
          edit={edit}
        />
        <TaskList setTaskText={setTaskText} setEdit={setEdit} />
      </div>
    </div>
  );
};

export default TaskManagerApp;
