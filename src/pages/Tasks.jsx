import { useState } from "react";
import TaskItem from "../components/TaskItem.jsx";

export default function Tasks({ tasks, setTasks }) {
  const [text, setText] = useState("");

  function addTask(e) {
    e.preventDefault();
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: text.trim(), done: false }]);
    setText("");
  }

  const toggle = (id) => setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const remove = (id) => setTasks(tasks.filter((t) => t.id !== id));

  return (
    <section className="box">
      <h2>Minhas tarefas</h2>
      <form onSubmit={addTask}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Nova tarefa..." />
        <button className="btn">Adicionar</button>
      </form>
      <ul>
        {tasks.map((t) => (
          <TaskItem key={t.id} task={t} onToggle={toggle} onRemove={remove} />
        ))}
      </ul>
      {tasks.length === 0 && <p className="muted">Nenhuma tarefa ainda.</p>}
    </section>
  );
}
