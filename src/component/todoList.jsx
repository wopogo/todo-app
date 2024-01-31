import { useState } from "react";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import Paper from "@mui/material/Paper";

export default function TodoList({ todo, id, onDelete }) {
  const [color, setColor] = useState("black");
  // const [textLine, setTextLine] = useState("none");
  const changeText = () => {
    setColor(color === "black" ? "gray" : "black");
  };
  return (
    <li>
      <Paper elevation={2} onClick={changeText}>
        <span style={{ color }}>{todo}</span>
        <DeleteForeverTwoToneIcon onClick={() => onDelete(id)} />
      </Paper>
    </li>
  );
}
