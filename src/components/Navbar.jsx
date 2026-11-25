import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <span className="logo">📚 StudyFlow</span>
      <nav>
        <NavLink to="/" end>Início</NavLink>
        <NavLink to="/tarefas">Tarefas</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </nav>
    </header>
  );
}
