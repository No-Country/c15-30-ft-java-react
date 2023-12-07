import API from "@/axios/apiConnection";
import { ProjectCard } from "@/components/layout/ProjectCard";
import { Input } from "@/components/ui/input";
import React from "react";
const Explore = async () => {
  const projects = await API.get("/projects");
  // debería traerse tambien la lista de proyectos a los que se ha dado like

  console.log(projects);

  return (
    <div>
      <section className="px-[20px] flex flex-col gap-5">
        <Input tipo="busqueda" />
        <hr className="border-2 border-gray-300" />
      </section>
      <section className="px-[20px] mt-5 flex flex-col gap-5">
        aquí van los proyectos recomendados para este usuario
      </section>

      {projects.map((project) => (
        <div key={project.id}>
          <ProjectCard
            project={project}
            nombre={project?.nombre}
            imagen={project?.imagenPerfilUrl}
            like={true}
            tecnologias={["Angular", "JavaScript", "Python"]} // debería ser la lista de tecnologías del proyecto
            descripcion={project?.descripcion}
          />
        </div>
      ))}
    </div>
  );
};

export default Explore;
