import "./TodoItem.css"

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="todo-item">
      <button
        className={`check ${completed && "check--active"}`}
        onClick={onComplete}
      >
      </button>
      <p>{text}</p>
      <button
        className="close-item"
        onClick={onDelete}
        >
      </button>
    </li>
  );
}

export { TodoItem };