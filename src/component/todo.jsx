import { useState } from "react";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

export default function Todo({ todo }) {
  const [style, setStyle] = useState(true);
  let todoStyle = {};
  let checkButton = ``;
  if (style === true) {
    todoStyle = { color: "black", textDecoration: "none" };
  } else {
    todoStyle = { color: "gray", textDecoration: "line-through" };
  }
  if (style === true) {
    checkButton = (
      <CheckCircleOutlineRoundedIcon
        onClick={() => {
          setStyle(!style);
        }}
      />
    );
  } else {
    checkButton = (
      <CheckCircleRoundedIcon
        color="action"
        onClick={() => {
          setStyle(!style);
        }}
      />
    );
  }

  return (
    <>
      <span
        onClick={() => {
          setStyle(!style);
        }}
        style={todoStyle}
      >
        {todo}
      </span>
      {checkButton}
    </>
  );
}
