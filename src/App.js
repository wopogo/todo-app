import "./App.css";
import { useState } from "react";
import TodoList from './component/todoList';

export default function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [todoKey, setTodoKey] = useState(0);
  // console.log("todoInput :", todoInput);
  console.log("todoList :", todoList);
  console.log("todoKey :", todoKey);

  const deleteTodoList = (id) => {
    const filteredTodoList = todoList.filter(list => list.id !== id);
    setTodoList(filteredTodoList);
  }
  return (
    <div className="container">
      <ul className="todo-element">
        {todoList.map((list) => {
          return (
            <TodoList key={list.id} todo={list.todo} id={list.id} onDelete={deleteTodoList} />
          )
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
        <input
          type="text"
          name="todo"
          placeholder="오늘은 뭐해야하지?"
          value={todoInput}
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
        />
        <input type="submit" value="+" />
      </form>
    </div>
  );
}
