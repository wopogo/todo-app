import { useState } from "react";

export default function TodoList({ todo, id, onDelete }) {
  const [color, setColor] = useState("black");
  // const [textLine, setTextLine] = useState("none");
  const changeText = () => {
    setColor(color === "black" ? "gray" : "black");
  };
  return (
    <li>
      <span onClick={changeText} style={{ color }}>
        {todo}
      </span>
      <button onClick={() => onDelete(id)}>X</button>
    </li>
  );
}
