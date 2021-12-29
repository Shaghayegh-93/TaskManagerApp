const taskListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      const newTask = {
        id: Math.ceil(Math.random() * 100),
        text: action.payload,
      };

      return { ...state, taskList: [...state.taskList, newTask] };
    }
    case "REMOVE_ALL_TASK": {
      return { ...state, taskList: "" };
    }
    case "REMOVE_ONE_TASK": {
      const updatedTaskList = state.taskList.filter(
        (task) => task.id !== action.payload
      );
      return { ...state, taskList: updatedTaskList };
    }

    case "EDIT_TASK": {
      const updatedTaskList = state.taskList.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, text: action.payload.text };
        }
        return task;
      });
      return { ...state, taskList: updatedTaskList };
    }
    case "SAVE_TO_LOCAL_STORAGE": {
      return { ...state, taskList: action.payload };
    }

    default:
      return state;
  }
};
export default taskListReducer;
