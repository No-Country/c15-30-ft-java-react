import API from "@/axios/apiConnection";
import { ProjectCard } from "@/components/layout/ProjectCard";
import { Input } from "@/components/ui/input";
import Proyectos from "../../constants/Proyectos.json";

const Explore = async () => {
  const response = await API.get("/proyectos");
  let projects = response || Proyectos;
  // debería traerse tambien la lista de proyectos a los que se ha dado like

  function filterProjects(formData) {
    projects = projects.filter((project) => project == formData.project);
  }

  return (
    <div>
      <form className="px-[20px] flex flex-col gap-5 mb-5">
        <Input name="project" tipo="busqueda" list="projectNames" disabled />
        <datalist id="projectNames">
          {projects.map((project) => (
            <option value={project.nombre} key={project.id} />
          ))}
        </datalist>
      </form>
      <hr className="border-2 border-gray-300" />
      <section className="px-[20px] mt-5 flex flex-col gap-5 md:grid md:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectCard project={project} like={true} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Explore;
