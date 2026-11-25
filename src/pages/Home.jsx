import { Link } from "react-router-dom";

export default function Home({ tasks }) {
  const done = tasks.filter((t) => t.done).length;

  return (
    <section className="box">
      <h1>Organize seus estudos</h1>
      <p>Anote suas tarefas e acompanhe o que já foi concluído.</p>
      <p><strong>{done}</strong> de <strong>{tasks.length}</strong> tarefas concluídas.</p>
      <Link to="/tarefas" className="btn">Ir para tarefas</Link>
    </section>
  );
}
