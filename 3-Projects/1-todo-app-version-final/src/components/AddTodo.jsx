import { useContext, useRef } from "react";
import styles from "./AddTodo.module.css";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { TodoItemsContext } from "../store/items-store-context";
function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);

  const todonameElement = useRef();
  const dueDateElement = useRef();

  const handleAddClickButton = (event) => {
    event.preventDefault();

    let todoName = todonameElement.current.value;
    let dueDate = dueDateElement.current.value;
    // console.log(`${todoName} on ${dueDate}`);
    addNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddClickButton}>
        <div className="col-6">
          <input
            ref={todonameElement}
            type="text"
            placeholder="Enter todo here"
            className={styles.todoInput}
          />
        </div>
        <div className="col-4">
          <input
            ref={dueDateElement}
            type="date"
            className={styles.todoInput}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-btn">
            <MdFormatListBulletedAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
