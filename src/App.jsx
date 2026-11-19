
import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Wordly Dictionary",
      description:
        "A dictionary application that helps users search for word meanings.",
    },
    {
      id: 2,
      title: "Quiz CLI",
      description:
        "A command-line quiz application that tests users' knowledge.",
    },
    {
      id: 3,
      title: "Weather Alerts",
      description:
        "An application that displays useful weather alerts and information.",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  function addProject(newProject) {
    setProjects((previousProjects) => [
      ...previousProjects,
      newProject,
    ]);
  }

  const filteredProjects = projects.filter((project) => {
    return (
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="app">
      <Navbar />

      <main className="container">
        <Header />

        <ProjectForm onAddProject={addProject} />

        <section className="projects-section" id="projects">
          <div className="projects-heading">
            <h2>My Projects</h2>
            <span>{filteredProjects.length} Projects</span>
          </div>

          <SearchBar
            searchTerm={searchTerm}
            onSearch={setSearchTerm}
          />

          <ProjectList projects={filteredProjects} />
        </section>
      </main>

      <footer className="footer" id="contact">
        <p>Get in touch and let's connect.</p>
        <p>© 2026 Stacy's Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
