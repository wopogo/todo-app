import "./App.css";
import { useState } from "react";
import TodoList from "./component/todoList";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { createSvgIcon } from "@mui/material/utils";

const PlusIcon = createSvgIcon(
  // credit: plus icon from https://heroicons.com/
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>,
  "Plus"
);

export default function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [todoKey, setTodoKey] = useState(0);
  console.log("todoList :", todoList);
  console.log("todoKey :", todoKey);

  const deleteTodoList = (id) => {
    const filteredTodoList = todoList.filter((list) => list.id !== id);
    setTodoList(filteredTodoList);
  };
  return (
    <Paper className="container" elevation={3} square={false}>
      <ul className="todo-element">
        {todoList.map((list) => {
          return (
            <TodoList
              key={list.id}
              todo={list.todo}
              id={list.id}
              onDelete={deleteTodoList}
            />
          );
        })}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newTodoList = { id: todoKey, todo: todoInput };
          const newTodoLists = [...todoList, newTodoList];
          setTodoInput("");
          setTodoKey(todoKey + 1);
          setTodoList(newTodoLists);
        }}
      >
        <TextField
          type="text"
          name="todo"
          label="오늘은 뭐해야하지?"
          value={todoInput}
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
        />
        <button type="submit">
          <PlusIcon />
        </button>
      </form>
    </Paper>
  );
}
