import { useContext } from "react";
import { TodoItemsContext } from "../store/items-store-context";
import styles from "./WelcomeMessage.module.css";
const WelcomeMessage = () => {
  const todoItemsObj = useContext(TodoItemsContext);
  const todoItems = todoItemsObj.todoItems;
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoye Your Day</p>
  );
};
export default WelcomeMessage;
