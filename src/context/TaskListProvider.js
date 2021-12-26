import { createContext, useContext, useReducer } from "react";
import taskListReducer from "./TaskListReducer";

const TaskListContext = createContext();
const TaskListContextDispatcher = createContext();
const initialState = {
  taskList: [],
};
const TaskListProvider = ({ children }) => {
  const [TaskList, dispatch] = useReducer(taskListReducer, initialState);
  return (
    <TaskListContext.Provider value={TaskList}>
      <TaskListContextDispatcher.Provider value={dispatch}>
        {children}
      </TaskListContextDispatcher.Provider>
    </TaskListContext.Provider>
  );
};

export default TaskListProvider;
export const useTaskList = () => useContext(TaskListContext);
export const useTaskListAction = () => useContext(TaskListContextDispatcher);
