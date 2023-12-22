import API from "@/axios/apiConnection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import React from "react";
import { FaHeart, FaCodeBranch } from "react-icons/fa";
import Image from "next/image";
import ProjectTask from "@/components/layout/ProjectTask";

const ProjectsId = async ({ params }) => {
  const projectId = params.id;
  const project = await API.get(`/proyectos/${projectId}`);
  const user = await API.get(`/usuarios/${project.creador_id}`);
  const tareas = await API.get("/tareas");
  // hacemos un get del proyecto por id
  // debemos traernos del back el usuario creador de este proyecto
  // debemos traernos del back las tareas asociadas a este proyecto.
  // debemos traernos del back los colaboradores actuales en el proyecto.

  return (
    <div className="relative h-screen flex flex-col items-center gap-[20px]">
      <section className="relative w-full md:w-1/2 flex justify-center overflow-hidden rounded-b-3xl shadow-3xl">
        {/* server */}

        <Image
          src={project.portada}
          alt={project.nombre}
          className="w-full h-full object-cover md:max-w-screen-md md:rounded-b-lg"
          width={500}
          height={350}
        />

        <FaHeart className="absolute top-5 right-5 text-[34px]" />
      </section>
      <section className="flex flex-col gap-[20px] px-[200px]">
        <p className={cn(textBold.className)}>{project.nombre}</p>
        <div className="flex justify-between items-center">
          <section>
            <p className={cn(textBold.className, "text-primary")}>
              {user.nombre + " " + user.apellido}
            </p>
            <p className={cn(textBold.className, "text-gray-400 text-sm")}>
              {user.rol}
            </p>
          </section>
          <section>
            <Avatar variant={"md"} className={""}>
              <AvatarImage src={user.imageUrl} />
              <AvatarFallback></AvatarFallback>
            </Avatar>
          </section>
        </div>

        <hr className="border-2 text-gray-300" />
        <h2 className={cn(textBold.className)}>Descripcion del proyecto</h2>
        <p className="text-gray-400">{project.descripcion}</p>

        <p className={cn("text-sm text-black")}>
          Da click sobre una tarea para ver los detalles sobre el estado de la
          misma.
        </p>
      <section className="px-[20px] md:hidden">
        <p className={cn(textBold.className, "text-primary")}>{user.nombre}</p>
        <p>ha publicado las siguientes tareas</p>
        lista de tareas
      </section>

      <section className="w-full flex justify-center md:h-full md:bg-primary md:text-primary-foreground md:rounded-3xl mb-5">
        <ProjectTask tareas={tareas} />
      </section>
      </section>
    </div>
  );
};

export default ProjectsId;
