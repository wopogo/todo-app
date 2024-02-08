import "./App.css";
import { useEffect, useState } from "react";
import createTime from "./function/createDate";
import Paper from "@mui/material/Paper";
import PlusIcon from "./style/plusIcon";
import TodoList from "./component/todoList";
import Sentence from "./component/sentence";
import deleteTodo from "./function/deleteTodo";
import CurrentDate from "./component/date";
import InputBase from '@mui/material/InputBase';
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
    <Paper className="container" elevation={8} square={false} sx={{padding : "20px", display:"flex", justifyContent:"center"}}>
      <div className="Paper-container">
        <CurrentDate />
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
        <Paper onSubmit={handleSubmit} component="form" sx={{ bottom: 0, p: "10px", width : "92%", margin : "20px"}} elevation={4}>
          <InputBase
            placeholder="오늘의 할 일을 적어주세요."
            name="todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            fullWidth
            autoFocus
            sx={{ ml: 2}}
          />
        </Paper>
        <button type="submit" style={{ display: "none" }}>
          <PlusIcon />
        </button>
      </div>
    </Paper>
  );
}
