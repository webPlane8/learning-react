import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext([]);

const reducerTodoItems = (currItems, action) => {
  let newTodoItems = currItems;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currItems,
      {
        name: action.payload.todoName,
        dueDate: action.payload.todoDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currItems.filter(
      (item) => item.name !== action.payload.todoName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(reducerTodoItems, []);

  const addNewItem = (todoName, todoDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        todoName,
        todoDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
