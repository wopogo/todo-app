import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Todo from "./todo";
// import { useRef } from "react";

export default function TodoList({ list, onDelete, onRefresh, onTodo }) {
  // const dragTodo = useRef(null);
  // const draggedOverTodo = useRef(null);

  // function handleSort() {
  //   const todoClone = [...list];
  //   const temp = todoClone[dragTodo.current];
  //   todoClone[dragTodo.current] = todoClone[draggedOverTodo.current];
  //   todoClone[draggedOverTodo.current] = temp;
  //   onTodo(todoClone);
  // }

  return (
    <ul style={{ overflow: "auto", height: "62%" }}>
      {list.map((_list, index) => {
        return (
          <div
            // draggable
            // onDragStart={() => {
            //   dragTodo.current = index;
            //   dragTodoStorage.current = localStorage.getItem(_list.id);
            // }}
            // onDragEnter={() => {
            //   draggedOverTodo.current = index;
            //   draggedTodoStorage.current = localStorage.getItem(_list.id)
            // }}
            // onDragEnd={handleSort}
            // onDragOver={(e) => {
            //   e.preventDefault();
            // }}
          >
            <li key={_list.id}>
              <Todo todo={_list.todo} />
              <DeleteOutlineIcon
                onClick={() => {
                  onDelete(_list.id);
                  onRefresh();
                }}
              />
            </li>
            <hr />
          </div>
        );
      })}
    </ul>
  );
}
