import "./App.css";
import { useEffect, useState } from "react";
import createTime from "./function/createDate";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import PlusIcon from "./style/plusIcon";
import TodoList from "./component/todoList";
import Sentence from "./component/sentence"
import deleteTodo from "./function/deleteTodo";
import { Helmet } from "react-helmet";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [refresh, setRresh] = useState(true);

  useEffect(() => {
    const loadedTodos = [];
    for (let i = 0; i < localStorage.length; i++) {
      const todoKey = localStorage.key(i);
      const todoJson = JSON.parse(localStorage.getItem(todoKey));
      loadedTodos.push(todoJson);
    }
    setTodoList(loadedTodos.sort((a, b) => a.id - b.id));
  }, [refresh]);

  const refreshFn = () => {
    setRresh(!refresh);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const time = createTime();
    const newTodo = { id: time, todo: todo };
    localStorage.setItem(time, JSON.stringify(newTodo));
    setTodoList([...todoList, newTodo]);
    setTodo("");
  };

  return (
    <Paper className="container" elevation={3} square={false}>
      <div className="Paper-container">
        <Sentence />
        <Helmet>
          <title>Todo App</title>
          <meta name="description" content="Nested component" />
          <style>
            {`
            @import
            url('https://fonts.googleapis.com/css2?family=Cute+Font&family=Noto+Sans+KR:wght@400;700&family=Poppins:wght@400;600&family=Titillium+Web:wght@300;400;700&display=swap');`}
          </style>
        </Helmet>
        <TodoList list={todoList} onDelete={deleteTodo} onRefresh={refreshFn} />
        <form onSubmit={handleSubmit}>
          <TextField
            label="할 일을 입력해주세요."
            name="todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">
            <PlusIcon />
          </button>
        </form>
      </div>
    </Paper>
  );
}
