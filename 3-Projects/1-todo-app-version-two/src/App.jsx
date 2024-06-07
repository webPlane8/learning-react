import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {
  let todoItems = [
    {
      name: "Buy Milk",
      dueDate: "05/06/2024",
    },
    {
      name: "Go to College",
      dueDate: "08/06/2024",
    },
    {
      name: "Shop Ggrocery ",
      dueDate: "09/06/2024",
    },
  ];
  return (
    <center className="todo_container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}
export default App;
