export default function TaskItem({ task, onToggle, onRemove }) {
  return (
    <li className={task.done ? "done" : ""}>
      <label>
        <input type="checkbox" checked={task.done} onChange={() => onToggle(task.id)} />
        <span>{task.text}</span>
      </label>
      <button onClick={() => onRemove(task.id)}>✕</button>
    </li>
  );
}
