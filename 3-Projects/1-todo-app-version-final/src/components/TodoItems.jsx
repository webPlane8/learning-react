import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoItemsContext } from "../store/items-store-context";
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  // const todoItems = todoItemsObj.todoItems;
  // console.log(todoItems);
  return (
    <div className={styles.todoItems}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
