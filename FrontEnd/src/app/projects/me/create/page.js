"use client";

import { ProjectsNavigation } from "@/components/layout/ProjectsNavigation";
import React from "react";

const Create = () => {
  return (
    <div className="h-full rounded-xl">
      <div className="p-[20px] flex justify-center">
        <ProjectsNavigation></ProjectsNavigation>
      </div>
      <section className="flex flex-col gap-96">
        <p id="title">titulo</p>
        <p id="description">descripcion</p>
        <p id="resources">resources</p>
        <p id="images">imagenes</p>
        <p id="category">categorias</p>
        <p id="tasks">tareas</p>
      </section>
    </div>
  );
};

export default Create;
