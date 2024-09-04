import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/items-store-context";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo_container">
        <AppName />
        <AddTodo />
        <TodoItems></TodoItems>
        <WelcomeMessage></WelcomeMessage>
      </center>
    </TodoItemsContextProvider>
  );
}
export default App;
