import { useEffect, useState, useRef } from "react";
import Card from "../components/cards/Card";

export default function HomeProjects() {
  const [projects, setProjects] = useState([]);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current === false) {
      fetch("/json/data.json")
        .then((response) => response.json())
        .then((data) => setProjects(data["projects"]))
        .then(() => (loaded.current = true));
    }
  });

  return (
    <section id="projects">
      <div className="container px-4 mx-auto py-24">
        <h1 className="font-bold text-3xl md:text-4xl/tight lg:text-5xl mb-2 bar-underline mx-auto">
          Proyek Kami
        </h1>
        <p className="mb-8 text-base/loose text-center">
          Mewujudkan Solusi, Menyelesaikan Tantangan
        </p>
        <div className="services-container grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <Card item={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
