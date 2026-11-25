import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Tasks from "./pages/Tasks.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home tasks={tasks} />} />
          <Route path="/tarefas" element={<Tasks tasks={tasks} setTasks={setTasks} />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}
