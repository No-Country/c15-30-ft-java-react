"use client";

import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import useSelectedProject from "@/state/projects/SelectedProject";

const WorkspaceDynamicProjectsInput = ({ reposArr }) => {

  const setSelectedProject = useSelectedProject(
    (state) => state.setSelectedProject
  );


  const handleSelectChange = (event) => {
    setSelectedProject(event.target.value);
  };


  return (
    <div className="w-full flex flex-col justify-end items-end md:flex-row md:justify-between ">
      <div>
        <label className={cn(textBold.className, "text-primary")}>
          Seleccionar un proyecto
        </label>
        <p>y obten los datos sobre el mismo</p>
      </div>
      <select className={"max-w-[400px]"} onChange={handleSelectChange}>
        <option value="" disabled selected>
          Repositorios
        </option>
        {reposArr.map((opcion, index) => (
          <option key={index} value={opcion}>
            {opcion}
          </option>
        ))}
      </select>
    </div>
  );
};

export default WorkspaceDynamicProjectsInput;
