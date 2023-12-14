'use client'

import React from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import useSelectedProject from "@/state/projects/SelectedProject"; 

const WorkspaceDynamicProjectsInput = ({ reposArr }) => {
  const setSelectedProject = useSelectedProject((state) => state.setSelectedProject);

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
      <Input
        type="select"
        tipo="default"
        placeholder="Buscar"
        list="opciones"
        className={"max-w-[400px]"}
        onChange={handleSelectChange}
      />
      <datalist id="opciones">
        {reposArr.map((opcion, index) => (
          <option key={index} value={opcion} />
        ))}
      </datalist>
    </div>
  );
};

export default WorkspaceDynamicProjectsInput;
