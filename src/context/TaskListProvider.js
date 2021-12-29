import { createContext, useContext, useReducer } from "react";
import taskListReducer from "./TaskListReducer";

const TaskListContext = createContext();
const TaskListContextDispatcher = createContext();
const initialState = {
  taskList: [],
  editTask: { id: null, text: "" },
};
const TaskListProvider = ({ children }) => {
  const [taskList, dispatch] = useReducer(taskListReducer, initialState);
  return (
    <TaskListContext.Provider value={taskList}>
      <TaskListContextDispatcher.Provider value={dispatch}>
        {children}
      </TaskListContextDispatcher.Provider>
    </TaskListContext.Provider>
  );
};

export default TaskListProvider;
export const useTaskList = () => useContext(TaskListContext);
export const useTaskListAction = () => useContext(TaskListContextDispatcher);
