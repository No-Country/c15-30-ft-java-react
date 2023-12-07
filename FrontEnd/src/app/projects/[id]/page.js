import API from "@/axios/apiConnection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import React from "react";
import { FaHeart, FaCodeBranch } from "react-icons/fa";

const ProjectsId = async ({ params }) => {
  const projectId = params.id;
  const project = await API.get(`/projects/${projectId}`);

  const userId = project.userId;
  const user = await API.get(`/users/${userId}`);

  console.log(project);

  return (
    <div className="relative h-screen flex flex-col gap-[20px]">
      <section className="relative w-full h-[333px] bg-red-50 overflow-hidden rounded-b-3xl shadow-3xl">
        {/* server */}
        {/* eslint-disable */}
        <img
          src={project.imagenPerfilUrl}
          alt="project image"
          className="w-full h-full object-cover"
        />
        {/* eslint-enable */}
        <FaHeart className="absolute top-5 right-5 text-[34px]" />
      </section>
      <section className="flex flex-col gap-[20px] px-[20px]">
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
            <Avatar variant={"md"}  className={""}>
              <AvatarImage  src={user.imageUrl} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </section>
        </div>

          <hr className="border-2 text-gray-300"/>
          <h2 className={cn(textBold.className)}>Descripcion del proyecto</h2>
        <p className="text-gray-400">{project.descripcion}</p>

        <p className={cn("text-sm text-black")}>
          Da click sobre una tarea para ver los detalles sobre el estado de la
          misma.
        </p>
      </section>
      <section className="px-[20px]">
        <p className={cn(textBold.className, "text-primary")}>{user.nombre}</p>
        <p>ha publicado las siguientes tareas</p>
        lista de tareas
      </section>

      <section>comentarios</section>

      <Button tipo={"rounded"} size={"rounded"} className={"fixed bottom-5 right-5 flex"}>
        <FaCodeBranch className="text-[24px] text-center"/>
      </Button>
    </div>
  );
};

export default ProjectsId;
