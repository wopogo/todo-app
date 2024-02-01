import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";

export default function TodoList({ list, onDelete, onRefresh }) {
  const cpmpleteTodo = (event) => {
    event.target.style.color =
      event.target.style.color === "black" ? "gray" : "black";
  };
  return (
    <ul>
      {list.map((list) => {
        return (
          <li key={list.id}>
            <span
              onClick={(e) => {
                cpmpleteTodo(e);
              }}
              style={{ color: "black" }}
            >
              {list.todo}
            </span>
            <DeleteForeverTwoToneIcon
              onClick={() => {
                onDelete(list.id);
                onRefresh();
              }}
            />
          </li>
        );
      })}
    </ul>
  );
}
