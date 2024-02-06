import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Todo from './todo'

export default function TodoList({ list, onDelete, onRefresh }) {
  return (
    <ul>
      {list.map((list) => {
        return (
          <>
            <li key={list.id}>
              <Todo todo={list.todo} />
              <DeleteOutlineIcon
                onClick={() => {
                  onDelete(list.id);
                  onRefresh();
                }}
              />
            </li>
            <hr />
          </>
        );
      })}
    </ul>
  );
}
