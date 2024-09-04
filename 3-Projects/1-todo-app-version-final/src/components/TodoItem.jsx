import { useContext } from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { TodoItemsContext } from "../store/items-store-context";
function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <h6>{todoName}</h6>
        </div>
        <div className="col-4">
          <h6>{todoDate}</h6>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-btn"
            onClick={() => deleteItem(todoName)}
          >
            <MdOutlineDeleteSweep />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
